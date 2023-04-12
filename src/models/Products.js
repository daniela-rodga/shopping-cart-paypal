const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
    itemNumber: { type: Number, required: true},
    name: { type: String, required: true},
    price: mongoose.Decimal128
})

module.exports = mongoose.model('Products', ProductsSchema, 'Products')
