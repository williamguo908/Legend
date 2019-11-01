
const public = require('express').Router();
//const users = require('express').Router();
const validator = require("../../services/validator.js");

public.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

public.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

public.get("/register", (req, res) => {
    res.sendFile(__dirname + "/register.html");
});

public.get("/reset-password", (req, res) => {
    res.sendFile(__dirname + "/reset-password.html");
});

public.get("/contact-us", (req,res) => {
  res.sendFile(__dirname + "/contact-us.html");
});


public.get("/programs", (req, res) => {
    res.sendFile(__dirname + "/programs.html");
});


const resetUser = require('./resetPassword')
public.post("/reset-password", validator.resetPassword, resetUser);


const authUser = require('./login')
public.post("/login", validator.authenticate, authUser);


const newUser = require('./register')
public.post("/register", validator.createUser, newUser);




module.exports = public;
