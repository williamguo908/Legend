var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');


module.exports = (req, res, next) => {
  console.log("Retrieving student profile...");
  const userId = req.params.id;

  Student.findById(userId, '-_password').exec(function (err, person) {
    if (err) return handleError(err);
    console.log(person);
    res.send(person);
  });
  
};
