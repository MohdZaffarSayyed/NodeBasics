const express = require('express');

const app = express();


app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.send(`
    <input type="text" placeholder="what do you want to know">
    <input type="button" value="tell me"> 
`);
});

app.get('/profile', (req, res) => {
    const user = {
        name: 'Zaffar',
        email: 'admin@checkwithdeveloper.com',
        country: 'IND',
        skills: ['system-admin', 'ssl', 'html/css/js', 'MERN']
    }
    res.render('profile', { user })
});




app.listen(5000);