const db = require('../../db')

const verifySameTeam = async function (bid, pid) {
    const bag = await db.queryOne(
        `
        SELECT * FROM bags
        WHERE bid = $1
        `,
        [bid]
    )
    const player = await db.queryOne(
        `
        SELECT * FROM players
        WHERE pid = $1
        `,
        [pid]
    )
    return bag.tid === player.tid
}

exports.create = async function (params) {
    const validParams = await verifySameTeam(params.bid, params.pid)
    if (!validParams) {
        return null
    }
    const now = new Date()
    return db.queryOne(
        `
        INSERT INTO responsibilities_taken (inserted_at, updated_at, bid, pid) 
        VALUES ($1, $2, $3, $4) RETURNING *
        `,
        [now, now, params.bid, params.pid]
    )
}

exports.update = async function (rtid, params) {
    const now = new Date()
    return db.queryOne(
        `
        UPDATE responsibilities_taken SET 
        updated_at = $1,
        bid = $2,
        pid = $3
        WHERE rtid = $4
        RETURNING *
        `,
        [now, params.bid, params.pid, rtid]
    )
}


exports.delete = async function (rtid) {
    return db.queryOne(
        `
        DELETE FROM responsibilities_taken 
        WHERE rtid = $1
        RETURNING *
        `,
        [rtid]
    )
}

exports.getAll = async function () {
    return db.query(
        'SELECT * FROM responsibilities_taken',
        []
    )
}

exports.getById = async function (rtid) {
    return db.queryOne(
        `
        SELECT * FROM responsibilities_taken
        WHERE rtid = $1
        `,
        [rtid]
    )
}