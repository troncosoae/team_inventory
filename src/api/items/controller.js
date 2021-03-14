const Item = require('./model')

exports.create = async function(params) {
    const { iid } = await Item.create(params)
    const item = await Item.getById(iid)
    return item
}

exports.update = async function(iid, params) {
    params = {
        ...params,
        iid: parseInt(params.iid),
        bid: parseInt(params.bid),
    }
    const result = await Item.update(iid, params)
    return result
}

exports.delete = async function(iid) {
    await Item.delete(iid)
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