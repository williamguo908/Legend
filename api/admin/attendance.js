
var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');

module.exports = (req, res, next) => {
  var students = req.body.studentId;
  var className = req.body.className;
  console.log("Recording attendance for class" + className)
  console.log(students);
  console.log(className);
  Student.updateMany(
    { '_students._id' : { $in: students }  }, //query
    {
      $inc: { "_students.0._classes.0.classesAttended": 1 }, //increment operation
    }, function (err, res) {
      if (err) {
        console.log("err:", err)
    } else {
        console.log("success with response:", res)
    }
  })
  res.redirect('/admin/students-list') 
}
