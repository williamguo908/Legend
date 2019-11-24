
var mongoose = require('mongoose');
var NewStudent = require('../../dbs/UserModel.js');
const { validationResult } = require('express-validator');


module.exports = (req, res, next) => {
  var newStudent = new NewStudent();
  console.log("Validating data from add student form..");
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }
    console.log("Getting new student data..");
    newStudent._students.push({_stuFirstName: req.body.firstname,
    _stuLastName:  req.body.lastname, _dob: req.body.dob, _address: req.body.address,
    _contactName: req.body.contactName, _contactPhone: req.body.contactPhone, _belt: req.body.belt});

    newStudent.save(function (err, newStudent) {
      console.log("Saving new student to database...")
      if (err) {
        console.log(err);
        console.log("Errors during save..redirecting back to add student form...")
        return res.redirect('/students');
      }
      else {
        return res.json({ id: newStudent.id, firstname: req.body.firstname, lastname: req.body.lastname });
        //res.send("Success! " + req.body.firstname + " " + req.body.lastname + " was added. Register code is " + newStudent.id);
        console.log("Success! " + newStudent + " was added. Register code is " + newStudent.id);
      }
    });
};
