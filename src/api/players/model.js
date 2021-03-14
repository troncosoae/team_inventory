const db = require('../../db')

exports.create = async function (params) {
    const now = new Date()
    return db.queryOne(
        `
        INSERT INTO Players (inserted_at, updated_at, name, tid) 
        VALUES ($1, $2, $3, $4) RETURNING *
        `,
        [now, now, params.name, params.tid]
    )
}

exports.update = async function (pid, params) {
    const now = new Date()
    return db.queryOne(
        `
        UPDATE Players SET 
        updated_at = $1,
        name = $2,
        tid = $3
        WHERE pid = $4
        RETURNING *
        `,
        [now, params.name, params.tid, pid]
    )
}


exports.delete = async function (pid) {
    return db.queryOne(
        `
        DELETE FROM Players 
        WHERE pid = $1
        RETURNING *
        `,
        [pid]
    )
}

exports.getAll = async function () {
    return db.query(
        'SELECT * FROM Players',
        []
    )
}

exports.getById = async function (pid) {
    return db.queryOne(
        `
        SELECT * FROM Players
        WHERE pid = $1
        `,
        [pid]
    )
}