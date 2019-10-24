
var mongoose = require('mongoose');
var NewStudent = require('../../dbs/UserModel.js');
const { validationResult } = require('express-validator');


module.exports = (req, res, next) => {
  var newStudent = new NewStudent();
  //Check if valid data was received from 'add student' form
  console.log("Validating data from add student form..");
  //If errors return Errors
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Invalid data..." + errors);
        return res.status(422).json({ errors: errors.array() });
    }
    console.log("Getting new student data..");
    newStudent._students.push({_stuFirstName: req.body.firstname,
    _stuLastName:  req.body.lastname, _dob: req.body.dob, _address: req.body.address,
    _contactName: req.body.contactName, _contactPhone: req.body.contactPhone, _belt: req.body.belt});
    var subdoc = newStudent._students[0];
    console.log(subdoc);
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
