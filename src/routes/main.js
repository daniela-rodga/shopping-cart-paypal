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

    // Render the shopping cart with the available products in database
    res.render('cart', { products });
});

router.get('/thank-you', (req, res) => {
    // Extract the transaction ID from the request parameters
    const transactionId = req.query.transactionId
  
    // Render the thank you page with the transaction ID
    res.render('thank-you', { transactionId })
  })

module.exports = router;