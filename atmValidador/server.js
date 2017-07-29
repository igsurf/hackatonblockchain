// Get the packages we need
const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');

// Create our Express application
const app = express();
const port = 3000;

require('./app/routes')(app, {});

app.listen(port, () => {
    console.log('We are live on ' + port);
});

// Use environment defined port or 3000
//var port = process.env.PORT || 3000;

// // Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
 res.json({ message: 'You are running dangerously low on beer!' });
});

// Register all our routes with /api
//app.use('/api', router);

// Start the server
//app.listen(port);
//console.log('Insert beer on port ' + port);