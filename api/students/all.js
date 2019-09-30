
//*works*

module.exports = (req, res) => {
  const dbs = req.app.locals.db;
  const db = dbs.db("Attendance");
  const collection = db.collection("Attendance");
  //const collection = req.app.locals.collection;
  collection.find({}).toArray().then(response => res.status(200).json(response)).catch(error=> console.error(error));
};
