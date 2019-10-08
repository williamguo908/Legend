
const public = require('express').Router();

public.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

module.exports = public;
