const app = require('./app1');
console.log("Hello World");
console.log(app.add())
const { writeFileSync } = require('fs');

// num = [2, 43, 2, 56, 4, 23, 56];

// num.filter(n => n % 2 === 0)
//     .forEach(n => {
//         console.log(n);
//     });

writeFileSync("ads.txt", "Hey, This is add page")