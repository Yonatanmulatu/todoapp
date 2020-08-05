const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    price: Number,
    catagory: String,
    image: String
});

module.exports = mongoose.model('Item', ItemSchema, 'menu');
