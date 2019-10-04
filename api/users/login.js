var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// define the username and password constraints
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});

// authentication
UserSchema.statics.authenticate = function (username, password, callback) {
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) { // if user is not found
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
      // user found now check the password
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

// password needs to be hashed in order for it to match the db
UserSchema.pre('save', function (next) {
  var user = this;
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    // store the hashed password in the schema
    user.password = hash;
    next();
  })
});

var User = mongoose.model('User', UserSchema);
module.exports = User;
