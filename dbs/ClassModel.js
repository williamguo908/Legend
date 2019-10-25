
var mongoose = require('mongoose');

var TestSchema = new mongoose.Schema({
    testPassed: Boolean,
    testComments: String,
    //testDate
});

var BBClubSchema = new mongoose.Schema({
    category: String,
    level: Number
});

var ClassSchema = new mongoose.Schema({
  className: {
    type: String
  },
  classesAttended: {
    type: Number
  },
  totalClasses: {
    type: Number
  },
  belt: {
    type: String
  },
  isEnrolled: {
    type: Boolean
  },
  test: [TestSchema]
});


module.exports = ClassSchema
