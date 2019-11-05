
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');
var StudentSchema = require('./StudentModel.js');


var AccountSchema = new mongoose.Schema({
  _firstName: {
    type: String,
    //required: true,
    trim: true
  },
  _lastName: {
    type: String,
    //required: true
  },
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
    type: Number //1: admin, 2: instructor?, 3: user
  },
  _students: [StudentSchema]
});





AccountSchema.pre('save', function(next) {
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


AccountSchema.statics.authenticate = function (email, password, callback) {
  var User = this;
  User.findOne({ _email: email })
    .exec(function (err, user) {
      if (err) {
        var err = new Error('Error on the server.');
        err.status = 500;
        return callback(err)
      } else if (!user) { // if user is not found
        console.log("no registered user found");
        var err = new Error('User not found.');
        err.status = 401;
        err.statusMessage = "User not found.";
        return callback(err);
      }
      // user found now check the password
      bcrypt.compare(password, user._password, function (err, result) {
        if (result === true) {
          console.log("User authenticated.");
          return callback(null, user);
        } else {
          console.log("Invalid credentials.");
          var err = new Error('Invalid credentials.');
          err.status = 401;
          err.statusMessage = 'Invalid credentials.';
          return callback(err);
        }
      })
    });
}








/*
AccountSchema.pre('save', function(next) {
  console.log("this pwd" + this._password);
  // check if password is present and is modified.
  if ( this._password && this.isModified('_password') ) {
    // call your hashPassword method here which will return the hashed password.
    bcrypt.hash(this._password, 10, function (err, hash) {
      if (err) {
        return next(err);
      }
      this._password = hash;
      console.log("password hashed.." + this._password);
    });
  }
  console.log("exiting save");
  // everything is done, so let's call the next callback.
  next();
});

*/

/*
AccountSchema.methods.hashPassword = function(next){
  var newuser = this;
  bcrypt.hash(newuser._password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    newuser._password = hash;
    console.log("password hashed.." + newuser._password);
  });
};
*/

/*
RegisterSchema.pre('save', function (next) {
  console.log("pre save....")

  NewUser.find({_stuId : newuser._stuId}, function (err, docs) {
    if (!docs.length){
      bcrypt.hash(newuser._password, 10, function (err, hash) {
        if (err) {
          return next(err);
        }
        newuser._password = hash;
        console.log("password hashed..")
        next();
      })
    } else {
        console.log('user exists: ', newuser._firstName);
        return next(new Error("User exists!"));
    }
  });
});
*/
/*
//hashing a password before saving it to the database
AccountSchema.pre('save', function (next) {
  console.log("pre save....")
  var newuser = this;
  bcrypt.hash(newuser._password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    newuser._password = hash;
    console.log("password hashed..")
    next();
  })
});
*/
// Apply the uniqueValidator plugin to userSchema.
//AccountSchema.plugin(uniqueValidator);

//Creating model NewUser from RegisterSchema
//var NewAccount = mongoose.model('New Account', AccountSchema)

//Instantiating user from NewUser
//var user = new NewUser();

var Account  = mongoose.model('New Account', AccountSchema, 'User Info')

module.exports = Account;
