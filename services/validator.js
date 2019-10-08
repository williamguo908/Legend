/*
const {check, validationResult} = require('express-validator');

module.exports = function(req, res)
    check('firstname').not().isEmpty().trim().escape().withMessage('Please enter a first name.'),
    check('lastname').not().isEmpty().trim().escape().withMessage('Please enter a last name.'),
    check('email', 'Your email is not valid').not().isEmpty().trim().escape().isEmail().normalizeEmail(),
    check('password', 'Your password must be at least 8 characters').not().isEmpty().trim().escape().isLength({min: 8}),
    check('confirmPassword', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
    check('code').trim().escape().optional(),
  , function (req, res, next) {
    const errors = validationResult(req);
    console.log(req.body);
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      return req.body;
      //next();//res.send({});
    }
  });
*/
