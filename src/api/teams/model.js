const db = require('../../db')

exports.create = async function (params) {
    const now = new Date()
    return db.queryOne(
        `
        INSERT INTO teams (inserted_at, updated_at, name) 
        VALUES ($1, $2, $3) RETURNING *
        `,
        [now, now, params.name]
    )
}

exports.update = async function (tid, params) {
    const now = new Date()
    return db.queryOne(
        `
        UPDATE teams SET 
        updated_at = $1,
        name = $2
        WHERE tid = $3
        RETURNING *
        `,
        [now, params.name, tid]
    )
}


exports.delete = async function (tid) {
    return db.queryOne(
        `
        DELETE FROM teams 
        WHERE tid = $1
        RETURNING *
        `,
        [tid]
    )
}

exports.getAll = async function () {
    return db.query(
        'SELECT * FROM teams',
        []
    )
}

exports.getById = async function (tid) {
    return db.queryOne(
        `
        SELECT * FROM teams
        WHERE tid = $1
        `,
        [tid]
    )
}