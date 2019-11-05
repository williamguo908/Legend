
var mongoose = require('mongoose');
const { validationResult } = require('express-validator');
var bcrypt = require('bcrypt');

var AdminSchema = new mongoose.Schema({
  _email: {
    type: String,
    //unique: true, //unique validator applied here
    //required: true
  },
  _password: {
    type: String,
    //required: true
  },
  _role: {
    type: Number //1: admin, 2: instructor?
  },
});


AdminSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('_password')) {
    console.log("password not modified..skip hashing")
    return next();
  }
  bcrypt.hash(user._password, 10, function (error, hash) {
    if (error) {
      return next(error);
    }
    console.log('HASH: ', hash);
    user._password = hash;
    console.log('USER.PASSWORD: ', user._password);
    next();
  });
});

var Admin  = mongoose.model('Admin Account', AdminSchema, 'User Info')

module.exports = (req, res, next) => {
  var admin = new Admin();
  console.log("Validating data..");
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }
  admin._email = req.body.email;
  admin._password = req.body.password;
  admin._role = 2;
  admin.save(function (err, user) {
    console.log(err);
    if (err){
      console.log("Errors during save..redirecting back to register form...")
      return res.send(err);
    }
    else {
      //res.send(user);
      res.redirect('/login');
      console.log("Success..." + admin._email + " saved!");
    }
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
