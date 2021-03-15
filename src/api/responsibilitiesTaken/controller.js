const ResponsibilityTaken = require('./model')

exports.create = async function(params) {
    const player = await ResponsibilityTaken.create(params)
    return player
}

exports.update = async function(pid, params) {
    const result = await ResponsibilityTaken.update(pid, params)
    return result
}

exports.delete = async function(pid) {
    const result = await ResponsibilityTaken.delete(pid)
    return result
}

exports.read = async function() {
    const result = await ResponsibilityTaken.getAll()
    return result
}

exports.readAllRows = async function() {
    const result = await ResponsibilityTaken.getAll()
    return result.rows
}

exports.readByID = async function(pid) {
    const result = await ResponsibilityTaken.getById(pid)
    return result
}