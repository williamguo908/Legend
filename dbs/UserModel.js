
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');

// Apply the uniqueValidator plugin to userSchema.

// define the schema for new users
var RegisterSchema = new mongoose.Schema({
  _firstName: {
    type: String,
    required: true,
    trim: true
  },
  _lastName: {
    type: String,
    required: true
  },
  _email: {
    type: String,
    unique: true,
    required: true
  },
  _password: {
    type: String,
    required: true
  },
  _code: {
    type: Number,
  }
});

//hashing a password before saving it to the database
RegisterSchema.pre('save', function (next) {
  var newuser = this;
  bcrypt.hash(newuser._password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    newuser._password = hash;
    next();
  })
});


//Creating model NewUser from RegisterSchema
RegisterSchema.plugin(uniqueValidator);
var NewUser = mongoose.model('New User', RegisterSchema, 'User Info');
var user = new NewUser();
module.exports = user;
