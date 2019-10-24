
const admin = require('express').Router();
const validator = require("../../services/validator.js");
//require functionality from users


admin.get("/student", (req, res) => {
    res.sendFile(__dirname + "/testAddForm.html");
});


const newStudent = require('./student')
admin.post("/student", validator.addStudent, newStudent);


admin.get("/profile/:id", (req, res)=> {
  res.send("admin home page")
});

const classes = require('./allClasses');
admin.get("/class", classes);


admin.get("/class/:id", (req, res) => {
    res.send("view class with particular id");
});

admin.get("/students", (req, res) => {
  res.send("list all students");
});

admin.get("/student/:id", (req, res) => {
    res.send("view student with particular id");
});

admin.get("/students/:classId", (req, res) => {
  res.send("list all students in a particular class");
});

/*
more resource endpoints to be continued...

*/

module.exports = admin;
