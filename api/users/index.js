
const users = require('express').Router();
const {check, validationResult} = require('express-validator');

users.get("/profile/:id", (req, res) => {
  res.send("user " + req.params.id + " home page");
});

users.post("/student", (req, res) => {
  //add new student to the database
})

users.get("/belt/:stuId", (req, res) => {
    res.send("view student belt standing");
});

users.get("/attendance/:stuId", (req, res) => {
  res.send("view student attendance history");
});

users.get("/schedule/:stuId", (req, res)=> {
    res.send("view student schedule");
});

users.get("/notes/:stuId", (req, res)=> {
  res.send("view student notes");
});

/*
more resource endpoints to be continued...

*/

module.exports = users;
