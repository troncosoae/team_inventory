const Router = require('koa-router')
const controller = require('./controller')

const router = Router()

router.get('/', async ctx => {
    const items = await controller.readAllRows()
    await ctx.render('items/read.html.ejs', {
        items: items
    })
})

router.get('/create', async ctx => {
    await ctx.render('items/create.html.ejs', {})
})

router.get('/update/:iid', async ctx => {
    const iid = ctx.params.iid
    const item = await controller.readByID(iid)
    console.log(item)
    await ctx.render('items/update.html.ejs', {
        item: item
    })
})


router.post('/create', async ctx => {
    const params = ctx.request.body
    const item = await controller.create(params)
    console.log('item created: ', item)
    ctx.redirect('/items')
})

router.post('/update', async ctx => {
    const params = ctx.request.body
    const result = await controller.update(parseInt(params.iid), params)
    console.log('item updated:', result)
    ctx.redirect('/items')
})

router.post('/delete/:iid', async ctx => {
    const iid = parseInt(ctx.params.iid)
    await controller.delete(iid)
    ctx.redirect('/items')
})


module.exports = router
