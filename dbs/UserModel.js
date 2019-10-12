
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');

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
    unique: true, //unique validator applied here
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

// Apply the uniqueValidator plugin to userSchema.
RegisterSchema.plugin(uniqueValidator);

//Creating model NewUser from RegisterSchema
var NewUser = mongoose.model('New User', RegisterSchema, 'User Info');

//Instantiating user from NewUser
var user = new NewUser();

module.exports = user;
