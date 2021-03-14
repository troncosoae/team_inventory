const db = require('../../db')

exports.create = async function (params) {
    const now = new Date()
    return db.queryOne(
        `
        INSERT INTO Bags (inserted_at, updated_at, name, tid) 
        VALUES ($1, $2, $3, $4) RETURNING *
        `,
        [now, now, params.name, params.tid]
    )
}

exports.update = async function (bid, params) {
    const now = new Date()
    return db.queryOne(
        `
        UPDATE Bags SET 
        updated_at = $1,
        name = $2,
        tid = $3
        WHERE bid = $4
        RETURNING *
        `,
        [now, params.name, params.tid, bid]
    )
}


exports.delete = async function (bid) {
    return db.queryOne(
        `
        DELETE FROM Bags 
        WHERE bid = $1
        RETURNING *
        `,
        [bid]
    )
}

exports.getAll = async function () {
    return db.query(
        'SELECT * FROM Bags',
        []
    )
}

exports.getById = async function (bid) {
    return db.queryOne(
        `
        SELECT * FROM Bags
        WHERE bid = $1
        `,
        [bid]
    )
}