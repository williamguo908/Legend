
const superAdmin = 1
const admin = 2
const user= 3;


exports.hasUserRole = function(req, res, next) {
  var role = req.role;
  console.log("role: " + role)
  if (role != user && role != superAdmin && role != admin) return res.status(403).send({ auth: false, message: 'Not authorized.' });
  next();
};

exports.hasAdminRole = function(req, res, next) {
  var role = req.role;
  console.log("role: " + role)
  if (role != superAdmin && role != admin) return res.status(403).send({ auth: false, message: 'Not authorized.' });
  next();
};
