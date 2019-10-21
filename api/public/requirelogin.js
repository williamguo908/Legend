// Middleware, this does stuff after the page posts and
// before the user gets a response

// Check to see if the user is logged in before showing
// pages that require a user to be logged in
function requiresLogin(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  } else {
    var err = new Error('You must be logged in to view this page.');
    err.status = 401;
    return next(err);
  }
}

// Don't know if this is necessary yet...
//router.get('/profile', mid.requiresLogin, function(req, res, next) {
  //...
//});
