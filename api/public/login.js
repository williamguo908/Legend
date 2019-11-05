
var mongoose = require('mongoose');
var User = require('../../dbs/UserModel.js');
const { validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const secret = process.env.SECRET


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
    if (err) return res.send(err);
    if (!user) return res.status(404).send('No user found.');
    var token = jwt.sign({ id: user._id, role: user._role}, secret, {
      expiresIn: 60*5 // expires in 300 seconds
    });
    res.cookie('jwt', token);
    //res.status(200).send({ auth: true, token: token });
    //res.cookie('jwt', jwt, { httpOnly: true, secure: true });
    if (user._role == 1 || user._role == 2){
      res.redirect("/admin/students")
    }
    else {
      res.redirect("/user/profile/"+user.id);
    }
  });
};
