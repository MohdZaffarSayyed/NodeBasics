const fs = require('fs');
const path = require('path');
//const dirPath = path.join(__dirname, 'Files');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/apple.txt`;


//FILE SYSTEM--DIRECTORY 

//creating 5 files in dirPath set
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, "A simple text file");
// }


//printing the file names in the defined directory 
// fs.readdir(dirPath, (err, files) => {
//     files.forEach((item) => {
//         console.log(item);
//     })
// })


//FILE SYSTEM- FILES- CRUD


//Create
//fs.writeFileSync(filePath, 'This is a simple text file with apple');

//read
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })


//update 
// fs.appendFile(filePath, '  appended data in the file', (err) => {
//     if (!err) {
//         console.log("File is updated ");
//     }
// })

//rename
// fs.rename(filePath, `${dirPath}/fruits.txt`, (err) => {
//     if (!err) {
//         console.log("File name is updated ");
//     }
// })


//delete
//fs.unlinkSync(`${dirPath}/fdelete.txt`);