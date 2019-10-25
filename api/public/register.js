
var mongoose = require('mongoose');
var User = require('../../dbs/UserModel.js');
const { validationResult } = require('express-validator');
var bcrypt = require('bcrypt');

module.exports = (req, res, next) => {
  var user = new User();
  console.log("Validating data from register form..");
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }
  console.log("Checking for access code " + req.body.code + " in database..");

  User.findOne({_id: req.body.code },function(err, user) {
  console.log("Found " + user);
  if (err || !user) {
    console.log("Account does not exist or code already registered.")
    console.log("Redirecting back to register form..");
    return res.redirect('/register');
  }
  console.log("Access code found! Creating your account profile.");
  user._stuId = req.body.code;
  user._firstName = req.body.firstname;
  user._lastName = req.body.lastname;
  user._email = req.body.email;
  user._password = req.body.password;
  console.log("Saving...");
  user.save(function (err, user) {
    console.log(err);
    if (err){
      console.log("Errors during save..redirecting back to register form...")
      return res.redirect('/register');
    }
    else {
      res.send(user);
      //res.redirect('/login');
      console.log("Success..." + user._firstName + " saved!");
    }
    });
  });
};


  //Model.findOneAndUpdate({ name : 'myBook', "data._id" : 'chapter' }, { "data.$.name" : 'Chapter 1' });


/*
// This will need to be changed. Data inconsistent if errors in the save() process.
Student.findOneAndUpdate({ _id: req.body.code, _isAccountActive: false }, { $set: { _isAccountActive: true } }, {new: true },function(err, user) {
   if (err || !user){
     console.log("err " + err);
     console.log("Account does not exist or code already registered.")
     console.log("Redirecting back to register form..");
     //callback(err);
     return res.redirect('/register')
  }
  console.log("Access code found! Creating your account profile.");
  newuser.save(function (err, newuser) {
  console.log(err);
  if (err){
    console.log("Errors during save..redirecting back to register form...")
    return res.redirect('/register');
  }
  else {
    res.redirect('/login');
    console.log("Success..." + newuser._firstName + " saved to 'Login' collection!");
  }
});
});
};
*/

  /*call function here in services layer perform validation, logic etc*/
  //const userDTO = req.body ;
  //createUser(userDTO);

/* eg of routing layer logic
route.post('/',
  validators.userSignup, // this middleware take care of validation
  async (req, res, next) => {
    // The actual responsability of the route layer.
    const userDTO = req.body;

    // Call to service layer.
    // Abstraction on how to access the data layer and the business logic.
    const { user, company } = await UserService.Signup(userDTO);

    // Return a response to client.
    return res.json({ user, company });
  });
*/
