const Player = require('./model')

exports.create = async function(params) {
    const player = await Player.create(params)
    return player
}

exports.update = async function(pid, params) {
    const result = await Player.update(pid, params)
    return result
}

exports.delete = async function(pid) {
    const result = await Player.delete(pid)
    return result
}

exports.read = async function() {
    const result = await Player.getAll()
    return result
}

exports.readAllRows = async function() {
    const result = await Player.getAll()
    return result.rows
}

exports.readByID = async function(pid) {
    const result = await Player.getById(pid)
    return result
}