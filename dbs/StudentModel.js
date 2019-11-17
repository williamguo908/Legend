
var mongoose = require('mongoose');
var ClassSchema = require('./ClassModel.js')
var dict = require('./belts.js');
var calcAgeGroup = require('../services/calcAgeGroup.js');
var getClass = require('../services/getClass.js');

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
  _dob: {
    type: Date,
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




StudentSchema.pre("save",function(next) {
  if (this._classes.length ==0){
      var ageGroup = calcAgeGroup(this._dob);
      var stuClass = getClass(this._belt, ageGroup);
      this._classes.push({
        "ageGroup": ageGroup,
        "className": stuClass,
        "classesAttended": 0,
        "totalClasses": 36,
        "isEnrolled": true
      })
    }
  next();
});



// Apply the uniqueValidator plugin to StudentSchema.
//StudentSchema.plugin(uniqueValidator);

//Creating model NewUser from RegisterSchema
//var NewStudent = mongoose.model('New Student', StudentSchema, 'User Info')

//Instantiating user from NewUser
//var newStudent = new NewStudent();

module.exports = StudentSchema
