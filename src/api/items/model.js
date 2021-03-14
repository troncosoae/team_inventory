const db = require('../../db')

exports.create = async function (params) {
    const now = new Date()
    return db.queryOne(
        `
        INSERT INTO Items (inserted_at, updated_at, name, bid, count) 
        VALUES ($1, $2, $3, $4, $5) RETURNING *
        `,
        [now, now, params.name, params.bid, params.count]
    )
}

exports.update = async function (iid, params) {
    const now = new Date()
    return db.queryOne(
        `
        UPDATE Items SET 
        updated_at = $1,
        name = $2,
        bid = $3,
        count = $4
        WHERE iid = $5
        RETURNING *
        `,
        [now, params.name, params.bid, params.count, iid]
    )
}


exports.delete = async function (iid) {
    return db.queryOne(
        `
        DELETE FROM Items 
        WHERE iid = $1
        RETURNING *
        `,
        [iid]
    )
}

exports.getAll = async function () {
    return db.query(
        'SELECT * FROM Items',
        []
    )
}

exports.getById = async function (iid) {
    return db.queryOne(
        `
        SELECT * FROM Items
        WHERE iid = $1
        `,
        [iid]
    )
}