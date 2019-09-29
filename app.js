// app.js

const path = require('path');
// Dependencies
const express = require('express');
const app = express();
const routes = require('./routes')
const public = require('./routes/public')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Connect routes to app.js
app.use('/', routes)

app.use(express.static('./routes/public'));

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is listening on port 4000');
});
