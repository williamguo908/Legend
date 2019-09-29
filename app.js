// app.js

const path = require('path');
// Dependencies
const express = require('express');
const app = express();
const api = require('./api')
//const public = require('./api/public')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect routes to app.js
app.use('/', api)

app.use(express.static('./api/public'));

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is listening on port 4000');
});
