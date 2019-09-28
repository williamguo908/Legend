// app.js

// Dependencies
const express = require('express');
const app = express();
const routes = require('./routes')
const public = require('./routes/public')

// Connect routes to app.js
app.use('/', routes)

app.use(express.static('./routes/public'));

app.listen(process.env.PORT || 4000, function(){
    console.log('Your node js server is listening on port 4000');
});
