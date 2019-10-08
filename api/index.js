const path = require('path');
const routes = require('express').Router();

const students = require('./students');
routes.use('/students', students);

const users = require('./users');
routes.use('/users', users);



const public = require('./public');
routes.use('/', public);


module.exports = routes;
