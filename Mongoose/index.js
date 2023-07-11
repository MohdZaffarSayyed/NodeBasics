// const mongoose = require('mongoose');

// const main = async() => {

//     await mongoose.connect('mongodb://localhost:27017/e-com');
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         price: Number
//     });

//     const productModel = mongoose.model('products', ProductSchema);
//     let data = new productModel({ name: "realme c33", price: 10000 });
//     let result = await data.save();
//     console.log(result);
// }

// main();



//another way

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-com');

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
});

const productModel = mongoose.model('products', ProductSchema);


//create
const saveData = async() => {
    let data = new productModel({
        name: "realme c33",
        price: 10000,
        category: "mobile"
    });
    let result = await data.save();
    console.log(result);
}

//update
const updateData = async() => {
    let data = await productModel.updateOne({ name: "realme c33" }, {
        $set: { name: "realme c33 pro", price: 11000 }
    })

    console.log(data);
}

//delete
const deleteData = async() => {
    let data = await productModel.deleteOne({ name: "realme c33" });
    console.log(data);
}

//read
const findData = async() => {
    let data = await productModel.find(); //if wants to find with any parameter then find({name:"realme c21"})
    console.log(data);
}

findData();