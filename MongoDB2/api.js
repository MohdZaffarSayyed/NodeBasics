const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('./connection');
const app = express();

app.get('/', async(req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray();

    res.send(data);
});


app.use(express.json());
app.post('/', async(req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
})


app.put('/', async(req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne({ name: "1plus" }, { $set: req.body }) // here the first parameter can 
        // be taken from body also if we just want to change other params 
        //{ name: req.body.name }, { $set: req.body }

    //another way is through params, 
    //in the request set as app.put('/:name', async(req, res)=>{})
    //and in uri as localhost:5000/existingname
    //and in req data.updateOne({ name: req.params.name }, { $set: req.body })
    res.send({ result: "updated" })
})


app.delete('/:id', async(req, res) => {
    let data = await dbConnect();
    let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    res.send(result);
})
app.listen(5000);