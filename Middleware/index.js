const express = require('express');

const app = express();

const middlewareFilter = require('./middleware');

//Application Level MiddleWare 
//const middlewareFilter = (req, res, next) => {

//     if (!req.query.age) {
//         res.send('Please provide your age');
//     } else if (req.query.age < 18) {
//         res.send('Age should be above 18');
//     } else {
//         next();
//     }

// };

// app.use(middlewareFilter);

// app.get('/', (req, res) => {
//     res.send('Hello this is Home Page');
// });

// app.get('/profile', (req, res) => {
//     res.send('Hello this is Profile Page');
// });


//Route Level
// const middlewareFilter = (req, res, next) => {

//     if (!req.query.age) {
//         res.send('Please provide your age');
//     } else if (req.query.age < 18) {
//         res.send('Age should be above 18');
//     } else {
//         next();
//     }

// };


// app.get('/', (req, res) => {
//     res.send('Hello this is Home Page');
// });

// app.get('/profile', middlewareFilter, (req, res) => {
//     res.send('Hello this is Profile Page');
// });


app.get('/', (req, res) => {
    res.send('Hello this is Home Page');
});

app.get('/profile', middlewareFilter, (req, res) => {
    res.send('Hello this is Profile Page');
});

app.listen(4500);