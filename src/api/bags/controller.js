const Bag = require('./model')

exports.create = async function(params) {
    const bag = await Bag.create(params)
    return bag
}

exports.update = async function(bid, params) {
    const result = await Bag.update(bid, params)
    return result
}

exports.delete = async function(bid) {
    const result = await Bag.delete(bid)
    return result
}

exports.read = async function() {
    const result = await Bag.getAll()
    return result
}

exports.readAllRows = async function() {
    const result = await Bag.getAll()
    return result.rows
}

exports.readByID = async function(bid) {
    const result = await Bag.getById(bid)
    return result
}