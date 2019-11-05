const path = require('path');
var VerifyToken = require('../services/requireLogin.js');
var role = require("../services/role.js");
const routes = require('express').Router();

const admin = require("./admin");
routes.use('/admin', VerifyToken, role.hasAdminRole, admin);

const students = require('./students_for_example_purposes');
//routes.use('/student', students);

const user = require('./user');
routes.use('/user', VerifyToken, role.hasUserRole, user);

const public = require('./public');
routes.use('/', public);

module.exports = routes;
