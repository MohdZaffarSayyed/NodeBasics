const dbConnect = require('./connection');

const updateData = async() => {
    let data = await dbConnect();
    let result = await data.updateMany({ name: 'pixel5' }, {
        $set: { name: 'Google Pixel 5' }
    });
    console.warn(result);
}

updateData();