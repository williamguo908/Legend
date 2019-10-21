
//Example to show how a simple query works with Mongoose schemas
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


module.exports = (req, res) => {
  var Student = mongoose.model('User', StudentSchema, 'User Info');
  Student.find({}, function (err, person) {
    if (err) return handleError(err);
    console.log(person);
    res.send(person);
  });
};
