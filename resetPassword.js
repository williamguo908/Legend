
var mongoose = require('mongoose');
var User = require('../../dbs/UserModel.js');
const { validationResult } = require('express-validator');
var nodemailer = require('nodemailer');
var user = new User();

module.exports = (req, res, next) => {
  console.log("Sending link to reset password to registered email..");
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }
    // check that email is registered
    User.findOne({_email: req.body.email },function(err, user) {
    console.log("Found " + user);
    if (err || !user) {
      console.log("Account does not exist please create a new account.");
      console.log("Redirecting back to register form..");
      return res.redirect('/register');
    }
    // send a link to reset the user's password
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // need an email account for the legends people
        user: 'legends@gmail.com',
        pass: 'yourpassword'
      }
    });

    var mailOptions = {
      from: 'legends@gmail.com',
      to: 'myfriend@yahoo.com',
      subject: 'Reset Your Password',
      // either text link or html link
      text: '',
      html: '<h1>Welcome</h1><p>That was easy!</p>'
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

};
