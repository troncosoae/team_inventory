const KoaRouter = require('koa-router')
const helloWorldRouter = require('./api/helloWorld/routes')

const router = KoaRouter()

router.use('/helloWorld', helloWorldRouter.routes())

module.exports = router
