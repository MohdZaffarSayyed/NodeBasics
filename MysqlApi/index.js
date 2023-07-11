const express = require('express');
const con = require('./config');

const app = express();

app.get('/', (req, res) => {
    con.query("select * from emp", (err, result) => {
        if (err) {
            console.log("error");
        } else {
            res.send(result);
        }
    })
});


app.use(express.json());

app.post('/', (req, res) => {
    // const data = { empId: "2", empName: "User2", salary: "50000", age: "22" };
    const data = req.body;
    con.query('insert into emp set ?', data, (err, result, fields) => {
        if (err) err;
        res.send(result);
    })
})

app.put('/:id', (req, res) => {
    //const data = ["Zaffar", 50000, 22, 2];   if we provide data static then we can use this without id in put req
    const data = [req.body.empName, req.body.salary, req.body.age, req.params.id]
    con.query("update emp set empName=?, salary=?, age=? where empId=?", data, (err, result, fields) => {
        if (err) err;
        res.send(result);
    })
})

app.delete('/:id', (req, res) => {
    con.query("delete from emp where empId=" + req.params.id, (err, result) => {
        if (err) err;
        res.send(result);
    })
})

app.listen(5000);