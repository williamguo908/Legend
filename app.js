// app.js

const path = require('path');
// Dependencies
const express = require('express');
require('dotenv').config()
const app = express();
const api = require('./api')
const port = process.env.PORT
const mongo_uri = process.env.MONGODB_URI
const MongoClient = require('mongodb').MongoClient;
//const public = require('./api/public')
//const initializeDatabase = require('./dbs')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect routes to app.js
app.use('/', api)

app.use(express.static('./api/public'));

MongoClient.connect(mongo_uri, { useNewUrlParser: true })
.then(client => {
  const db = client
  app.locals.db = db;
  app.listen(port, () => console.info(`REST API running on port ${port}`));
}).catch(error => console.error(error));






/*
app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is listening on port 4000');
});
*/
