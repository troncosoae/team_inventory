const db = require('../../db')

exports.create = async function (params) {
    const now = new Date()
    return db.queryOne(
        `
        INSERT INTO Items (inserted_at, updated_at, name, bid) 
        VALUES ($1, $2, $3, $4) RETURNING *
        `,
        [now, now, params.name, params.bid]
    )
}

exports.update = async function (iid, params) {
    const now = new Date()
    return db.queryOne(
        `
        UPDATE Items SET 
        updated_at = $1,
        name = $2,
        bid = $3
        WHERE iid = $4
        RETURNING *
        `,
        [now, params.name, params.bid, iid]
    )
}


exports.delete = async function (iid) {
    return db.queryOne(
        `
        DELETE FROM Items 
        WHERE iid = $1
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