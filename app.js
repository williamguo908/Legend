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
//const flash = require('express-flash-notification');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(flash(app));

// Connect routes to app.js
app.use('/', api)

app.use(express.static('./api/public'));

//Sets up mongoose connection with parameters to get rid of deprecation warnings
mongoose.connect(mongo_uri, { useNewUrlParser: true,  dbName: "Users", useUnifiedTopology:true } )
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

//Gets the default connection
const db = mongoose.connection;


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected');
  app.listen(port, () => console.info(`REST API running on port ${port}`)); //comment out this line if not allowing access to db
});

//Comment out line below to test on heroku and make db connection
//app.listen(port, () => console.info(`REST API running on port ${port}`));
