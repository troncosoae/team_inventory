const Router = require('koa-router')
const controller = require('./controller')

const router = Router()

router.get('/', async ctx => {
    const bags = await controller.readAllRows()
    await ctx.render('bags/read.html.ejs', {
        bags: bags
    })
})

router.get('/create', async ctx => {
    await ctx.render('bags/create.html.ejs', {})
})

router.get('/update/:bid', async ctx => {
    const bid = ctx.params.bid
    const bag = await controller.readByID(bid)
    await ctx.render('bags/update.html.ejs', {
        bag: bag
    })
})


router.post('/create', async ctx => {
    const params = ctx.request.body
    const bag = await controller.create(params)
    console.log('bag created: ', bag)
    ctx.redirect('/bags')
})

router.post('/update/:bid', async ctx => {
    const bid = ctx.params.bid
    const params = ctx.request.body
    const result = await controller.update(parseInt(bid), params)
    console.log('bag updated:', result)
    ctx.redirect('/bags')
})

router.post('/delete/:bid', async ctx => {
    const bid = parseInt(ctx.params.bid)
    const result = await controller.delete(bid)
    console.log('bag deleted:', result)
    ctx.redirect('/bags')
})


module.exports = router
