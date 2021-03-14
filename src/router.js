const KoaRouter = require('koa-router')
const helloWorldRouter = require('./api/helloWorld/routes')
const itemsRouter = require('./api/items/routes')

const router = KoaRouter()

router.use('/helloWorld', helloWorldRouter.routes())
router.use('/items', itemsRouter.routes())

module.exports = router
