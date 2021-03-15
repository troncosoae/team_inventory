const db = require('../../db')

exports.dbQuery = async function (query, paramsArray) {
    return db.query(query, paramsArray)
}
