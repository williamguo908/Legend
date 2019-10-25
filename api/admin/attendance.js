

var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');


module.exports = (req, res, next) => {
  console.log("Recording attendance for class" + req.params.className)
  //....
};
