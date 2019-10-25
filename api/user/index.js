
const user = require('express').Router();
const {check, validationResult} = require('express-validator');

const profile = require('./userProfile');
user.get("/profile/:id", profile);

user.post("/student", (req, res) => {
  //add new student to the database
})

user.get("/belt/:stuId", (req, res) => {
    res.send("view student belt standing");
});

user.get("/attendance/:stuId", (req, res) => {
  res.send("view student attendance history");
});

user.get("/schedule/:stuId", (req, res)=> {
    res.send("view student schedule");
});

user.get("/notes/:stuId", (req, res)=> {
  res.send("view student notes");
});

/*
more resource endpoints to be continued...

*/

module.exports = user;
