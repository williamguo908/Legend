
var mongoose = require('mongoose');
var ClassSchema = require('./ClassModel.js')

// define the schema for new students
var StudentSchema = new mongoose.Schema({
  _stuFirstName: {
    type: String,
    //required: true
  },
  _stuLastName: {
    type: String,
    //required: true
  },
  _dob: { // may not be able to store this in actuality due to it being private data
    type: String,
    //required: true
  },
  _address: {
    type: String,
    //required: true
  },
  _contactName: {
    type: String,
    //required: true
  },
  _contactPhone: {
    type: String,
    //required: true
  },
  _belt: {
    type: String,
    //required: true
  },
  _publicNotes: {
    type: String,
    default: ''
  },
  _privateNotes: {
    type: String,
    default: ''
  },
  _classes: [ ClassSchema ],
  _leadershipTeam: {
    type: Boolean,
    default: false
  },
  _competitionTeam: {
    type: Boolean,
    default: false
  }
});

/*
StudentSchema.pre("save",function(next) {
  //if student age is between a value and belt is whatever color, Then
  // check the belt+age combination and push the student to the appropriate class
  this._classes.push({
    "className": "Little Legends",
    "classesAttended": 0,
    "totalClasses": 36
  })
  next();
});
*/


// Apply the uniqueValidator plugin to StudentSchema.
//StudentSchema.plugin(uniqueValidator);

//Creating model NewUser from RegisterSchema
//var NewStudent = mongoose.model('New Student', StudentSchema, 'User Info')

//Instantiating user from NewUser
//var newStudent = new NewStudent();

module.exports = StudentSchema
