


var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');
const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }
    const userId = req.params.id;

    console.log("Updating profile " + userId);
    Student.findOneAndUpdate(
      { '_students._id' : userId  }, //query
      {
        $set: { }
      }, function (err, res) {
        if (err) {
          console.log("err:", err)
      } else {
          console.log("success with response:", res)
      }
    })

  }
