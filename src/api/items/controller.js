const Item = require('./model')

exports.create = async function(params) {
    const item = await Item.create(params)
    return item
}

exports.update = async function(iid, params) {
    const result = await Item.update(iid, params)
    return result
}

exports.delete = async function(iid) {
    const result = await Item.delete(iid)
    return result
}

exports.read = async function() {
    const result = await Item.getAll()
    return result
}

exports.readAllRows = async function() {
    const result = await Item.getAll()
    return result.rows
}

exports.readByID = async function(iid) {
    const result = await Item.getById(iid)
    return result
}