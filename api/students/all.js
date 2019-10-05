
var mongoose = require('mongoose');



// define the
var StudentSchema = new mongoose.Schema({
  _firstName: {
    type: String,
    required: true,
    trim: true
  },
  _belt: {
    type: String,
    required: true,
  }
});

/*
module.exports = (req, res) => {
  const dbs = req.app.locals.db;
  const students = StudentSchema.find({});
  res.send(students);
  //const db = dbs.db("Attendance");
  //const collection = db.collection("Attendance");
  //const collection = req.app.locals.collection;
  //collection.find({}).toArray().then(response => res.status(200).json(response)).catch(error=> console.error(error));
};
*/



module.exports = (req, res) => {
  //const myDB =  mongoose.connection.useDb('Users');
  var Student = mongoose.model('User', StudentSchema, 'User Info');
  Student.find({}, function (err, person) {
    if (err) return handleError(err);
    console.log(person);
    res.send(person);
  });
};
