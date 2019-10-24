

const students = require('express').Router();

const all = require('./all');
students.get('/all', all);
students.get('/', all);

//const student = require('./student');
//students.get('/:stuId', student);

module.exports = students;
