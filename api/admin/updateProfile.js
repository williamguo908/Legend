


var mongoose = require('mongoose');
var Student = require('../../dbs/UserModel.js');
const { validationResult } = require('express-validator');

module.exports = (req, res, next) => {
  console.log("Validating data from updating student form..");
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }
    //const userId = req.params.id;
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const dob = req.body.dob
    const address = req.body.address
    const contactName = req.body.contactName
    const contactPhone = req.body._contactPhone

    console.log("Updating profile " + userId);
    Student.findOneAndUpdate(
      { '_students._id' : userId  }, //query
      {
        $set: { "_students._firstName": firstname, "_students._lastName": lastname,  "_students._address": address,
       "_students._contactName": contactName , "_students._contactPhone": contactPhone } //increment operation
      }, function (err, res) {
        if (err) {
          console.log("err:", err)
      } else {
          console.log("success with response:", res)
      }
    })

  }
