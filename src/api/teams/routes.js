const Router = require('koa-router')
const controller = require('./controller')

const router = Router()

router.get('/', async ctx => {
    const teams = await controller.readAllRows()
    await ctx.render('teams/read.html.ejs', {
        teams: teams
    })
})

router.get('/create', async ctx => {
    await ctx.render('teams/create.html.ejs', {})
})

router.get('/update/:tid', async ctx => {
    const tid = ctx.params.tid
    const team = await controller.readByID(tid)
    await ctx.render('teams/update.html.ejs', {
        team: team
    })
})


router.post('/create', async ctx => {
    const params = ctx.request.body
    const team = await controller.create(params)
    console.log('team created: ', team)
    ctx.redirect('/teams')
})

router.post('/update/:tid', async ctx => {
    const tid = ctx.params.tid
    const params = ctx.request.body
    const result = await controller.update(parseInt(tid), params)
    console.log('team updated:', result)
    ctx.redirect('/teams')
})

router.post('/delete/:tid', async ctx => {
    const tid = parseInt(ctx.params.tid)
    const result = await controller.delete(tid)
    console.log('team deleted:', result)
    ctx.redirect('/teams')
})


module.exports = router
