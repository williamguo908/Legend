
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User = require('../../dbs/UserModel.js');
var bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');


module.exports = (req, res, next) => {
  console.log("Validating data from login form..");
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      console.log("Invalid data..." + errors);
      return res.status(422).json({ errors: errors.array() });
  }
  console.log("Checking credentials..");
  var email = req.body.email;
  var password = req.body.password;
  User.authenticate(email, password, function(err, user) {
    if (err || !user) {
      return res.redirect('/login');
    }
      res.redirect("Account authenticated.")
  });
};




// password needs to be hashed in order for it to match the db
/*UserSchema.pre('save', function (next) {
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

var User = mongoose.model('User', UserSchema, 'Login');

module.exports = User;
*/
