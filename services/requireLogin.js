// Middleware, this does stuff after the page posts and
// before the user gets a response

// Check to see if the user is logged in before showing
// pages that require a user to be logged in
var jwt = require('jsonwebtoken');
const secret = process.env.SECRET

function verifyToken(req, res, next) {
  //var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
  //var token = req.body.token || req.headers['x-access-token'] || req.query.token;
  //var token = req.get('authorization');
  console.log(req.cookies)
  var token = req.cookies.jwt
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, secret, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    req.role = decoded.role;
    console.log(req.userId);
    console.log(req.role);
    next();
  });
}

module.exports = verifyToken;
