const KoaRouter = require('koa-router')

const helloWorldRouter = require('./api/helloWorld/routes')
const itemsRouter = require('./api/items/routes')
const bagsRouter = require('./api/bags/routes')
const teamsRouter = require('./api/teams/routes')
const playersRouter = require('./api/players/routes')
const responsibilitiesTakenRouter = require('./api/responsibilitiesTaken/routes')
const uiRouter = require('./api/ui/routes')

const router = KoaRouter()

router.use('/helloWorld', helloWorldRouter.routes())
router.use('/items', itemsRouter.routes())
router.use('/bags', bagsRouter.routes())
router.use('/teams', teamsRouter.routes())
router.use('/players', playersRouter.routes())
router.use('/responsibilitiesTaken', responsibilitiesTakenRouter.routes())

router.use('', uiRouter.routes())

module.exports = router
