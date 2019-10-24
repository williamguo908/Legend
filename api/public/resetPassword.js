
var mongoose = require('mongoose');
var User = require('../../dbs/UserModel.js');
const { validationResult } = require('express-validator');
var user = new User();
var bcrypt = require('bcrypt');


module.exports = (req, res, next) => {
  console.log("Sending new password to registered email..");
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }
    // check that email is registered
    // .....

};
