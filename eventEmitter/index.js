const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

let count = 0;
event.on("countApi", () => {
    count++;
    console.log("count of API", count);
})

app.use('/', (req, res) => {
    res.send('Api Called');
    event.emit("countApi");
})

app.use('/search', (req, res) => {
    res.send('Api Called');
    event.emit("countApi");
})

app.listen(5000);