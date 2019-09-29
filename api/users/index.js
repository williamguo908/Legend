
const users = require('express').Router();


users.get("/", (req, res) => {
    res.sendFile(__dirname + "/testForm.html");
});

const newUser = require('./register')
users.post("/", newUser);


module.exports = users;
