

const data = require('../../data.json');

module.exports = (req, res) => {
  const students = data.students;
  res.status(200).json({ students });
};
