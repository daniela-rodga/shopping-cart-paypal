const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shopping_cart_db', {})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));