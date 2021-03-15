const Router = require('koa-router')
const controller = require('./controller')

const router = Router()

router.get('/', async ctx => {
    const responsibilitiesTaken = await controller.readAllRows()
    await ctx.render('responsibilitiesTaken/read.html.ejs', {
        responsibilitiesTaken: responsibilitiesTaken
    })
})

router.get('/create', async ctx => {
    await ctx.render('responsibilitiesTaken/create.html.ejs', {})
})

router.get('/update/:rtid', async ctx => {
    const rtid = ctx.params.rtid
    const responsibilityTaken = await controller.readByID(rtid)
    await ctx.render('responsibilitiesTaken/update.html.ejs', {
        responsibilityTaken: responsibilityTaken
    })
})


router.post('/create', async ctx => {
    const params = ctx.request.body
    const responsibilityTaken = await controller.create(params)
    console.log('responsibilityTaken created: ', responsibilityTaken)
    ctx.redirect('/responsibilitiesTaken')
})

router.post('/update/:rtid', async ctx => {
    const rtid = ctx.params.rtid
    const params = ctx.request.body
    const result = await controller.update(parseInt(rtid), params)
    console.log('responsibilityTaken updated:', result)
    ctx.redirect('/responsibilitiesTaken')
})

router.post('/delete/:rtid', async ctx => {
    const rtid = parseInt(ctx.params.rtid)
    const result = await controller.delete(rtid)
    console.log('responsibilityTaken deleted:', result)
    ctx.redirect('/responsibilitiesTaken')
})


module.exports = router
