
var mongoose = require('mongoose');
//var AccessUser = require('../../dbs/AccessModel.js');

var NewStudent = require('../../dbs/StudentModel.js');
const { validationResult } = require('express-validator');
var newStudent = new NewStudent();
//var newAccessCode = new AccessUser();
module.exports = (req, res, next) => {
  //Check if valid data was received from 'add student' form
  console.log("Validating data from add student form..");
  //If errors return Errors
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }
    console.log("Getting new student data..");
    newStudent._firstName = req.body.firstname;
    newStudent._lastName = req.body.lastname;
    newStudent._dob = req.body.dob;
    newStudent._address = req.body.address;
    newStudent._contactName = req.body.contactName;
    newStudent._contactPhone = req.body.contactPhone;
    newStudent._belt = req.body.belt;
  //Add student info (id, first name, last name, address, dob, belt, contact
  // name, contact phone) into 'User Info' collection
  newStudent.save(function (err, newStudent) {
    console.log("Saving new student to database...")
    if (err){
      console.log(err);
      console.log("Errors during save..redirecting back to add student form...")
      return res.redirect('/student');
    }
    else {
      res.send("Success! " + newStudent._firstName + " " + newStudent._lastName + " was added. Register code is " + newStudent.id);
      console.log("Success! " + newStudent._firstName + " " + newStudent._lastName + " was added. Register code is " + newStudent.id);
    }
  });
};
