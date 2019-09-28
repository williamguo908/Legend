
const users = require('express').Router();
var bodyParser = require('body-parser');
users.use(bodyParser.json());
users.use(bodyParser.urlencoded({ extended: true }));

users.get("/", (req, res) => {
    res.sendFile(__dirname + "/testForm.html");
});

const newUser = require('./register')
users.post("/signUp", newUser);


module.exports = users;
