const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = (process.env.NODE_ENV === 'production') ?
    'mongodb+srv://tlevital:Naama$44@cluster0-klgzh.mongodb.net/test?retryWrites=true&w=majority' :
    'mongodb://localhost:27017';
// Database Name
const dbName = 'toysdb';

var dbConn = null;

async function connect() {
    if (dbConn) return dbConn;
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true });
        const db = client.db(dbName);
        dbConn = db;
        return db;
    } catch (err) {
        console.log('Cannot Connect to DB', err)
        throw err;
    }
}


async function getCollection(collectionName) {
    const db = await connect()
    return db.collection(collectionName);
}

module.exports = {
    connect,
    getCollection
}