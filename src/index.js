const express = require('express')
const path = require('path')
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')

//Initializations
const app = express()
require('./database')

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views')) // Handlebars files
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')

// Middlewares
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method')) //PUT AND DELETE

// Routes
app.use(require('./routes/main'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// Server Initialization
app.listen(app.get('port')), () => {
    console.log('Server on port ', app.get('port'))
}
