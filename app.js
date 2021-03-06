const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products

// initialize our express app
const app = express();

// Set up mongoose connection to mLab //
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://exampleuser:p455w0rd5@ds042888.mlab.com:42888/exampleproduct';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// Set up mongoose connection to mLab //

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 7700;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});