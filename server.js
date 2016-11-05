//----------------------
// Node Dependencies
//----------------------

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Set up an express server

var app = express();
var PORT = process.env.PORT || 3000;

// Standard Body Parser code to make things a little easier

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));

//Router files
//Point our server to the route files

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Start the server with a listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
