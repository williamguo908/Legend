

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
require('express-validator');


// define the
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
    //validate: [ isEmail, "Email should have a valid syntax e.g: example@example.com" ]
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


module.exports = (req, res, err) => {
  //Creating model NewUser from RegisterSchema
  var NewUser = mongoose.model('New User', RegisterSchema, 'User Info');
  var user = new NewUser({
    _firstName: req.body.firstname,
    _lastName: req.body.lastname,
    _email:  req.body.email,
    _password: req.body.password
  });

  console.log(user._firstName + user._lastName +  user._email + user._password );
  /*call function here in services layer perform validation, logic etc*/
  user.save(function (err, user) {
  if (err) return console.error(err);
    console.log(user._firstName + " saved to user info collection!");
    res.redirect('/users/login');
    res.end(user._firstName + " saved to user info collection!");
  });

};



// call the built-in save method to save to the database

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
