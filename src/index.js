const Koa = require('koa')

const app = new Koa()

const PORT = process.env.PORT || 3000;

exports.start = async function() {
    try {
        // db_info = await db.start()
        this.server = await app.listen(PORT)
        console.log(`Listening to PORT ${PORT}`)
    } catch (error) {
        console.log(error)
    }
}

exports.close = async function() {
    await this.server.close()
}
