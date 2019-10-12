// app.js

const path = require('path');
// Dependencies
const express = require('express');
require('dotenv').config()
const app = express();
const api = require('./api')
const port = process.env.PORT
const mongo_uri = process.env.MONGODB_URI
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect routes to app.js
app.use('/', api)

app.use(express.static('./api/public'));

//Sets up mongoose connection
mongoose.connect(mongo_uri, { useNewUrlParser: true,  dbName: "Users", useUnifiedTopology:true } )
mongoose.set('useCreateIndex', true);

//Gets the default connection
const db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
  app.listen(port, () => console.info(`REST API running on port ${port}`));
});
