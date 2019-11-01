
const admin = require('express').Router();
const validator = require("../../services/validator.js");

const newStudent = require('./student')
const students = require('./allStudents');
const classList = require('./class');
const classes = require('./allClasses');

const profile = require('./stuProfile');
admin.get("/profile/:id", profile);

admin.get("/student", (req, res) => {
    res.sendFile(__dirname + "/testAddForm.html");
});
admin.post("/student", validator.addStudent, newStudent);
admin.get("/class", classes);
admin.get("/attendance/:className", classList);
admin.get("/students", students);


admin.get("/profile/:id", (req, res)=> {
  res.send("admin home page")
});

admin.get("/class/:id", (req, res) => {
    res.send("view class with particular id");
});

admin.get("/student/:id", (req, res) => {
    res.send("view student with particular id");
});



/*
more resource endpoints to be continued...

*/

module.exports = admin;
