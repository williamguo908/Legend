
const admin = require('express').Router();
const validator = require("../../services/validator.js");
const newStudent = require('./student')
const students = require('./allStudents');
const classList = require('./class');
const classes = require('./allClasses');

//for admin creating another admin
admin.get("/add", (req,res) => {
  res.sendFile(__dirname + "/testAddForm.html");
});
const newadmin = require('./createAdmin');
admin.post("/add", newadmin);

const profile = require('./stuProfile');
admin.get("/profile/:id", profile);

admin.get("/students", (req, res) => {
    res.sendFile(__dirname + "/dashboard-students.html");
});
admin.post("/students", validator.addStudent, newStudent);

admin.get("/class", (req, res) => {
    res.sendFile(__dirname + "/dashboard-classes.html");
});

const studentsAttended = require('./attendance');
admin.post("/attendance/:className", studentsAttended);

admin.get("/student-added", (req, res)=> {
    res.sendFile(__dirname + "/student-added.html");
});

admin.get("/class-list", classes); //for demo purposes
admin.get("/attendance/:className", classList);
admin.get("/students-list", students); //for demo purposes


admin.get("/profile/:id", (req, res)=> {
  res.send("admin home page")
});

admin.get("/class/:id", (req, res) => {
    res.send("view class with particular id");
});

admin.get("/student/:id", (req, res) => {
    res.send("view student with particular id");
});


module.exports = admin;
