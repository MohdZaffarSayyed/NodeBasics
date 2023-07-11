const { MongoClient } = require('mongodb');
const DBurl = 'mongodb://localhost:27017';
const dbName = 'NodeMain';
const client = new MongoClient(DBurl);

async function getData() {
    let result = await client.connect();
    let db = result.db(dbName);
    let collection = db.collection('laptop');
    let response = await collection.find({}).toArray();
    console.log(response)
}

getData();