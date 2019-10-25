
var mongoose = require('mongoose');
var Class = require('../../dbs/UserModel.js');

//<p>Gets list of all classes</p>
//<p>Gets class name, ages, and total number of students enrolled in the class for each class (there are 9 classes)</p>
module.exports = (req, res, next) => {
  console.log("Getting list of classes and number enrolled in each class..");
  Class.aggregate( [ //Since classes are contained within arrays, $unwind operator is used to access each class for processing
      {
        $unwind: { path: "$_students", preserveNullAndEmptyArrays: true } //unwind first to get to students array
      },
      {
        $unwind: { path: "$_students._classes", preserveNullAndEmptyArrays: true } //unwind again to get to classes array
      },
      {
        $match : { '_students._classes.isEnrolled' : true } //filter out classes for which that student is currently enrolled
       },
      {
        $group:
        {
           _id: '$_students._classes.className',
           numberEnrolled: { $sum: 1}
        }
    }
  ]).
  then(function (response) {
  console.log(response);
  res.send(response);
});

};
