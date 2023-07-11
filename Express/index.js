const express = require('express');
const path = require('path');


const app = express();
const publicPath = path.join(__dirname, 'public');

//getting the data from the query
app.get('/', (req, res) => {
    console.log('Data from the query', req.query.name);
    res.send('hello ' + req.query.name + ' welcome!');
})

//rendering HTML data directly 
app.get('/about', (req, res) => {
    res.send(`
    <input type="text" placeholder="what do you want to know">
    <input type="button" value="tell me"> 
`);
})

//rendering json data
app.get('/help', (req, res) => {
    res.send([{
            name: 'zaffar',
            email: 'admin@checkwithdeveloper.com'
        },
        {
            name: 'Moazzam',
            email: 'admin@checkwithdeveloper.com'
        }
    ])
})

//rendering the html page directly 

app.use(express.static(publicPath));


app.get('/mypage', (req, res) => {
    res.sendFile(`${publicPath}/mypage.html`);
})

//express js template engine 

app.set('view engine', 'ejs');
app.get('/profile', (req, res) => {
    const user = {
        name: 'Mohammed Zaffar',
        email: 'admin@checkwithdevloper.com',
        country: 'IND'
    }
    res.render('profile');
})

app.listen(5000);