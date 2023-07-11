const fs = require('fs');

//checking the data in argumnet vector
//console.log(process.argv);


//adding a file with data as 
//node index.js apple.txt 'Hey this is an apple store'
// const input = process.argv
// fs.writeFileSync(input[2], input[3]);



//adding another parameter to whether add or remove the files
//node index.js add zaffar.txt 'Hello World'
//node index.js add zaffar2.txt 'Hello World'
//node index.js remove zaffar2.txt
const input = process.argv

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4]);
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3]);
} else {
    console.log("invalid input");
}