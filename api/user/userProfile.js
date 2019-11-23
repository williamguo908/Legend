

var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');




module.exports = (req, res, next) => {
  console.log("Retrieving your user profile...");
  const stuId = req.params.id;
  // Need to hide private notes from user view but keep in admin view..
  Student.findOne( { '_students._id': stuId }).select("_students._stuFirstName _students._stuLastName _students._dob _students._address _students._contactName _students._contactPhone _students._belt _students._publicNotes _students._privateNotes _students._leadershipTeam _students._competitionTeam").exec(function (err, person) {
    if (err) return handleError(err);
    console.log(person);
    res.send(person);
  });
};
