
const admin = require('express').Router();
//require functionality from users 

admin.get("/profile/:id", (req, res)=> {
  res.send("admin home page")
});

admin.get("/class", (req, res) => {
    res.send("list all classes");
});

admin.get("/class/:id", (req, res) => {
    res.send("view class with particular id");
});

admin.get("/student", (req, res) => {
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
