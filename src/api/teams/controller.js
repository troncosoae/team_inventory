const Team = require('./model')

exports.create = async function(params) {
    const team = await Team.create(params)
    return team
}

exports.update = async function(tid, params) {
    const result = await Team.update(tid, params)
    return result
}

exports.delete = async function(tid) {
    const result = await Team.delete(tid)
    return result
}

exports.read = async function() {
    const result = await Team.getAll()
    return result
}

exports.readAllRows = async function() {
    const result = await Team.getAll()
    return result.rows
}

exports.readByID = async function(tid) {
    const result = await Team.getById(tid)
    return result
}