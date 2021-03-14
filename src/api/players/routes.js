const Router = require('koa-router')
const controller = require('./controller')

const router = Router()

router.get('/', async ctx => {
    const players = await controller.readAllRows()
    await ctx.render('players/read.html.ejs', {
        players: players
    })
})

router.get('/create', async ctx => {
    await ctx.render('players/create.html.ejs', {})
})

router.get('/update/:pid', async ctx => {
    const pid = ctx.params.pid
    const player = await controller.readByID(pid)
    await ctx.render('players/update.html.ejs', {
        player: player
    })
})


router.post('/create', async ctx => {
    const params = ctx.request.body
    const player = await controller.create(params)
    console.log('player created: ', player)
    ctx.redirect('/players')
})

router.post('/update/:pid', async ctx => {
    const pid = ctx.params.pid
    const params = ctx.request.body
    const result = await controller.update(parseInt(pid), params)
    console.log('player updated:', result)
    ctx.redirect('/players')
})

router.post('/delete/:pid', async ctx => {
    const pid = parseInt(ctx.params.pid)
    const result = await controller.delete(pid)
    console.log('player deleted:', result)
    ctx.redirect('/players')
})


module.exports = router
