const dbConnect = require('./connection.js')

//Read DB
// using Promises 
// dbConnect().then((res) => {
//     res.find().toArray().then((data) => { // to find the data only for specific name then in find add param as
//         console.log(data) // find({ name: 'mi4a' })

//     })
// })

//using async -await 

const main = async() => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();