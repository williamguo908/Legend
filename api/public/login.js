
var mongoose = require('mongoose');
var User = require('../../dbs/UserModel.js');
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
      //res.send("Account authenticated.")
      res.redirect("/admin/students/");
      //res.redirect("/user/profile/"+user.id);
  });
};
