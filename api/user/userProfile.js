

var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');


module.exports = (req, res, next) => {
  console.log("Retrieving your user profile...");
  const stuId = req.params.id;
  // Need to hide private notes from user view but keep in admin view..
  Student.findOne( { '_students._id': stuId }, '-_privateNotes').exec(function (err, person) {
    if (err) return handleError(err);
    console.log(person);
    res.send("Student Profile. " + person);
  });
};
