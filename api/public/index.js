
const public = require('express').Router();
//const pub = require('express')
// Bring static assests
//app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/public'));
//routes.get('/', function(req, res) {
//    res.sendFile(path.join(__dirname, '/index.html'));
//});


public.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});


module.exports = public;
