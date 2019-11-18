
var mongoose = require('mongoose');
var Class = require('../../dbs/UserModel.js');

module.exports = (req, res, next) => {
  var className = req.params.className;
  console.log("Getting list of students for a class..." + className);
  Class.aggregate( [ //Since classes are contained within arrays, $unwind operator is used to access each class for processing
      {
        $unwind: { path: "$_students", preserveNullAndEmptyArrays: true } //unwind first to get to students array
      },
      {
        $unwind: { path: "$_students._classes", preserveNullAndEmptyArrays: true } //unwind again to get to classes array
      },
      {
        $match : { '_students._classes.isEnrolled' : true, '_students._classes.className' : className } //filters
       },
      {
        $project:
        {
           _id: '$_students._id',
           firstName: '$_students._stuFirstName',
           lastName: '$_students._stuLastName',
        }
    }
  ]).
  then(function (response) {
  console.log(response);
  res.send(response);
});

};
