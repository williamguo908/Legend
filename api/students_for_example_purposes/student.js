
//Example from a tutorial..
/*
const data = require('../../data.json');

// keep logic out of routes and have services layer handle that
module.exports = (req, res) => {
  const stuId = req.params.stuId * 1; // coerces stuId from string to integer
  const student = data.students.find(s => s.id === stuId);

  res.status(200).json({ student });
};
*/
