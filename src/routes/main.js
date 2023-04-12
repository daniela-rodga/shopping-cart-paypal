const express = require('express');
const router = express.Router();
const Products = require('../models/Products')

router.get('/', (req, res) => {
    // Render the intro for the shopping cart project
    res.render('index');
});

router.get('/cart', async (req, res) => {
    // Extract the list of products from the database shopping_cart_db
    const products = await Products.find({}).lean({})

    // Calculate the total price of all products
    let totalPrice = products.reduce((acc, curr) => acc + curr.price, 0);
    console.log('Total price'+totalPrice)
    // Render the shopping cart with the available products in database
    res.render('cart', { products, totalPrice });
});


module.exports = router;