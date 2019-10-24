
var mongoose = require('mongoose');
var Class = require('../../dbs/UserModel.js');

//<p>Gets list of all classes</p>
//<p>Gets class name, ages, and total number of students enrolled in the class for each class (there are 9 classes)</p>
module.exports = (req, res, next) => {
  console.log("getting list of classes");
  //query for class names and map to the appropriate age category
  // then get number of subdocs that are currently enrolled in the class
  Class.aggregate( [
      {
        $match : { _firstName : "da" } 
      },
      {
        $group:
        {
           _id: '$_lastName',
           count: { $sum: 1}
        }
    }
  ]).
  then(function (res) {
  console.log(res); //
});
  res.send("yes");
};
//db.class.aggregate([{$_className: {_id: "$students._className"}}])
//db.users.aggregate([{$group: {_id:"$emails.address"}}])
/*
{ "_id" : [ "a@a.com" ] }
{ "_id" : [ "b@a.com" ] }
{ "_id" : [ "c@a.com" ] }
*/


/*Example from mongoose docs using aggregate()
// Find the max balance of all accounts
Users.aggregate([
  { $group: { _id: null, maxBalance: { $max: '$balance' }}},
  { $project: { _id: 0, maxBalance: 1 }}
]).
then(function (res) {
  console.log(res); // [ { maxBalance: 98000 } ]
});

// Or use the aggregation pipeline builder.
Users.aggregate().
  group({ _id: null, maxBalance: { $max: '$balance' } }).
  project('-id maxBalance').
  exec(function (err, res) {
    if (err) return handleError(err);
    console.log(res); // [ { maxBalance: 98 } ]
  });
  */
