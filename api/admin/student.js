
var mongoose = require('mongoose');
//var newuser = require('../../dbs/UserModel.js');
var AccessUser = require('../../dbs/AccessModel.js');
const { validationResult } = require('express-validator');

var newStudent = new AccessUser();

module.exports = (req, res, next) => {
  //Check if valid data was received from 'add student' form
  //If errors return Errors
  //Add student info (first name, last name, address, dob, belt, contact
  // name, contact phone) into 'User Info' collection
  //Add firstname, last name, and unique access code into 'Access_Codes' collection

 //If no errors during save
};
