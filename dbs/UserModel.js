
var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
var bcrypt = require('bcrypt');

// define the schema for new users
var AccountSchema = new mongoose.Schema({
  _stuId: {
    type: String,
    unique: true
    //required: true
  },
  _firstName: {
    type: String,
    default: 'fjek',
    //required: true,
    trim: true
  },
  _lastName: {
    type: String,
    //required: true
  },
  _email: {
    type: String,
    unique: true, //unique validator applied here
    //required: true
  },
  _password: {
    type: String,
    //required: true
  }
});

/*
RegisterSchema.pre('save', function (next) {
  console.log("pre save....")
  var newuser = this;
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

module.exports = AccountSchema
