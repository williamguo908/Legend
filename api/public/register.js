
var mongoose = require('mongoose');
var newuser = require('../../dbs/UserModel.js');
var AccessUser = require('../../dbs/AccessModel.js');
const { validationResult } = require('express-validator');


module.exports = (req, res, next) => {
  console.log("Validating data from register form..");
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }

  console.log("Getting registration data..");
  newuser._id = req.body.code;
  newuser._firstName = req.body.firstname;
  newuser._lastName = req.body.lastname;
  newuser._email = req.body.email;
  newuser._password = req.body.password;

  //newuser = req.body

  console.log("Register form info:");
  console.log("firstname: " + newuser._firstName);
  console.log("lastname " + newuser._lastName);
  console.log("email " + newuser._email);
  console.log("unhashed pw " + newuser._password);
  console.log("code (id) " + newuser._id);
  console.log(" ");

  AccessUser.findOne({_accessCode: req.body.code},(function (err, user){
    console.log("Now, must check if access code " + req.body.code + " is in database..");
    if (err || !user){
      console.log("err " + err);
      console.log("user " + user);
      console.log("Errors present or code does not exist..");
      console.log("Redirecting back to register form..");
      return res.redirect('/register');
    }
      console.log("Access code found!");
      newuser.save(function (err, newuser) {
        console.log("Saving new user...")
        if (err){
          console.log("Errors during save..redirecting back to register form...")
          return res.redirect('/register');
        }
        else {
          res.redirect('/login');
          console.log("Success..." + newuser._firstName + " saved to 'Login' collection!");
        }
      });
  }));
};
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
