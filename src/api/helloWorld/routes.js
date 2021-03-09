const Router = require('koa-router')

const router = Router()

router.get('/', async ctx => {
    await ctx.render('helloWorld/helloWorld.html.ejs', {})
})

module.exports = router
