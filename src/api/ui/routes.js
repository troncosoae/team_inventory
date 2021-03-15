const Router = require('koa-router')
const { dbQuery } = require('./dbWorker')

const router = Router()

router.get('/seeTeam/:tid', async ctx => {
    const tid = ctx.params.tid
    const bags = await dbQuery(
        'SELECT * FROM bags WHERE tid = $1',
        [tid]
    )
    const players = await dbQuery(
        'SELECT * FROM players WHERE tid = $1',
        [tid]
    )
    console.log(bags)
    console.log(players)
    await ctx.render('ui/seeTeam.html.ejs', {
        bags: bags.rows,
        players: players.rows,
    })
})

module.exports = router
