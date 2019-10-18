
var mongoose = require('mongoose');
var user = require('../../dbs/UserModel.js');

module.exports = (req, res, err) => {
  user._id = req.body.code;
  user._firstName = req.body.firstname;
  user._lastName = req.body.lastname;
  user._email = req.body.email;
  user._password = req.body.password;

  //console.log(user._firstName + user._lastName +  user._email + user._password );

  /*call function here in services layer perform validation, logic etc*/
  //const userDTO = req.body ;
  //createUser(userDTO);

  // call the built-in save method to save to the database
  user.save(function (err, user) {
  if (err) return console.error(err);
    res.redirect('/login');
    console.log(user._firstName + " saved to user info collection!");
  });
};



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
