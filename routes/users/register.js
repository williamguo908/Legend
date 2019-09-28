

module.exports = (req, res) => {
  var myData = req.body.name
  /*call method to parse data*/
  res.send("item saved to database");

};
