const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdb'
});

// con.connect((err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("db connected ");
//     }
// })

con.query("select * from emp", (err, result) => {
    console.warn("result", result);
})