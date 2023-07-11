const { MongoClient } = require('mongodb');
const DBurl = 'mongodb://localhost:27017';
const dbName = 'e-com';
const client = new MongoClient(DBurl);

async function dbConnect() {
    let result = await client.connect();
    let db = result.db(dbName);
    return db.collection('products');
}

module.exports = dbConnect;