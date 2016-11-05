//---------------------------------------------
// LOAD DATA
// Link the routes to the data sources
// that hold arrays of information
//---------------------------------------------

var friendData = require('../data/friends.js');

//---------------------------------------------
// ROUTING
//---------------------------------------------

module.exports = function (app) {

    // API GET Requests
    app.get('/api/friends', function (req, res) {
        res.json(friendData);
    });

    // API POST Requests
    app.post('/api/friends', function (req, res) {
        friendData.push(req.body);
        res.json(true);
    });
};
