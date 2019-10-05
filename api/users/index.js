
const users = require('express').Router();


users.get("/login", (req, res) => {
    res.sendFile(__dirname + "/testForm.html");
});


users.get("/register", (req, res) => {
    res.sendFile(__dirname + "/testForm.html");
});

const newUser = require('./register')
users.post("/register", newUser);


module.exports = users;
