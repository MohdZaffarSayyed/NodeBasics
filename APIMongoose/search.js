const express = require('express');
require('./config');
const products = require('./products');
const app = express();

app.use(express.json());

app.get('/search/:key', async(req, res) => {
    let data = await products.find({
        "$or": [
            { "name": { $regex: req.params.key } }, // if wants just filter by name then it is good enough
            { "category": { $regex: req.params.key } }
        ]

    });
    res.send(data);
})

app.listen(5000);