const dbService = require('./db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    remove,
    update,
    add
}

async function query(filterBy = {}) {

    const criteria = {};
    if (filterBy.txt) {
        criteria.name = filterBy.txt
    }
    if (filterBy.minBalance) {
        criteria.balance = { $gte: filterBy.minBalance }
    }


    const collection = await dbService.getCollection('toy')
    try {
        const toys = await collection.find(criteria).toArray();
        return toys
    } catch (err) {
        console.log('ERROR: cannot find toys')
        throw err;
    }
}

async function getById(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        const toy = await collection.findOne({ "_id": ObjectId(toyId) })
        return toy
    } catch (err) {
        console.log(`ERROR: cannot find toy ${toyId}`)
        throw err;
    }
}

async function remove(toyId) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.remove({ "_id": ObjectId(toyId) })
    } catch (err) {
        console.log(`ERROR: cannot remove toy ${toyId}`)
        throw err;
    }
}

async function update(toy) {
    const id = new ObjectId(toy._id)
        // delete toy._id
    toy._id = id
    const collection = await dbService.getCollection('toy')
    try {
        await collection.updateOne({ "_id": id }, { $set: toy })
        return toy
    } catch (err) {
        console.log(`ERROR: cannot update toy ${toy._id}`)
        throw err;
    }
}

async function add(toy) {
    const collection = await dbService.getCollection('toy')
    try {
        await collection.insertOne(toy);
        return toy;
    } catch (err) {
        console.log(`ERROR: cannot insert toy`)
        throw err;
    }
}