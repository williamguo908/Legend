
var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');


module.exports = (req, res, next) => {
  console.log("Getting list of students..");
  Student.aggregate( [ //Since classes are contained within arrays, $unwind operator is used to access each class for processing
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
        $project: //project for selecting what fields you want
        {
           _id: '$_students._id',
           firstName: '$_students._stuFirstName',
           lastName: '$_students._stuLastName',
           belt: '$_students._belt',
           totalAttended: { $sum: '$_students._classes.classesAttended' },
           totalClasses: {$sum: '$_students._classes.totalClasses' }
        }
    }
  ]).
  then(function (response) {
  console.log(response);
  res.send(response);
});

};
