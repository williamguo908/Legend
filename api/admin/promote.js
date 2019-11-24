


var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');
const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  ///console.log("Validating data from updating student form..");
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }

    const userId = req.params.id;
    const belt = req.params.belt;

    console.log("Updating profile " + userId);
    Student.findOneAndUpdate(
      { '_students._id' : userId  }, //query
      {
        $set: { "_students._belt": belt  }
      }, function (err, res) {
        if (err) {
          console.log("err:", err)
      } else {
          console.log("success with response:", res)
      }
    })

  }
