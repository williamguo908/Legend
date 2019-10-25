

var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');


module.exports = (req, res, next) => {
  console.log("Retrieving your user profile...");
  const userId = req.params.id;
  //const userId = req.params.id * 1; // coerces stuId from string to integer
  // Need to hide private notes from user view but keep in admin view
  Student.findById(userId, '-_password').exec(function (err, person) {
    if (err) return handleError(err);
    console.log(person);
    res.send(person);
  });
  //....
};
