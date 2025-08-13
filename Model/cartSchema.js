const mongoose = require('mongoose');

const myCart = mongoose.Schema({
    itemName: {type: String, required: true},
    category: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
});

module.exports = mongoose.model('myCart', myCart);