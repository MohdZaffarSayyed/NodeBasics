const dbConnect = require('./connection');

const deleteData = async() => {
    let data = await dbConnect();
    let result = await data.deleteMany({ name: 'Google Pixel 5' })
    console.warn(result);
}

deleteData();