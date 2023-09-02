const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: Number,
    title: String,
    subtitle: String,
    description: String,
    price: Number,
    quantity: Number,
    img: String,
    img1: String,
    img2: String,
    img3: String,
    img4: String,
});
const Product = mongoose.model('Product', ProductSchema, 'productDataz');
module.exports = Product;