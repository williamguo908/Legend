
var mongoose = require('mongoose');

// define the schema for new students
var StudentSchema = new mongoose.Schema({
  _firstName: {
    type: String,
    required: true
  },
  _lastName: {
    type: String,
    required: true
  },
  _dob: { // may not be able to store this in actuality due to it being private data
    type: String,
    required: true
  },
  _address: {
    type: String,
    required: true
  },
  _contactName: {
    type: String,
    required: true
  },
  _contactPhone: {
    type: String,
    required: true
  },
  _belt: {
    type: String,
    required: true
  },
  _publicNotes: {
    type: String,
    default: ''
  },
  _privateNotes: {
    type: String,
    default: ''
  },
});



// Apply the uniqueValidator plugin to StudentSchema.
//StudentSchema.plugin(uniqueValidator);

//Creating model NewUser from RegisterSchema
var NewStudent = mongoose.model('New Student', StudentSchema, 'User Info')

//Instantiating user from NewUser
//var newStudent = new NewStudent();

module.exports = NewStudent
