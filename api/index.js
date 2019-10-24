const path = require('path');
const routes = require('express').Router();

const admin = require("./admin");
routes.use('/admin', admin);

const students = require('./students_for_example_purposes');
//routes.use('/student', students);

const user = require('./user');
routes.use('/user', user);

const public = require('./public');
routes.use('/', public);

module.exports = routes;
