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

        var resultsArry = [];
        newUserData = req.body;

        friendData.forEach(function(element, index) {

          var newArry = element.scores;
          var operationArry = [];
          var evaluation = 0;

          newArry.forEach(function(element, index) {
            var result = parseInt(newArry[index]) - parseInt(newUserData.scores[index]);
            operationArry.push(Math.abs(result));
          });

          operationArry.forEach(function(element) {
            evaluation += parseInt(element);
          });
          resultsArry.push(evaluation);
        });

        console.log(resultsArry);

        // Need to find the lowest number in the results arrays

        var lowestNumber = Math.min.apply(null, resultsArry);

        // Once we have the lowest number, we need to locate the index to match it with the friendData to find the match

        var index = resultsArry.indexOf(lowestNumber);

        // Send the match as the result of the POST

        res.json(friendData[index]);

        friendData.push(newUserData);
    });
};
