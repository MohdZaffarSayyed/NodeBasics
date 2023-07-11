const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    ratings: Number,
    category: String

});

module.exports = mongoose.model('products', productSchema);