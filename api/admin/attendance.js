
var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');

module.exports = (req, res, next) => {
  console.log("Recording attendance for class" + req.params.className)
  var students = req.body.studentId;
  var className = req.body.className;
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
  res.send("Attendance recorded.")
}
