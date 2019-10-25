
const {check, validationResult} = require('express-validator');

exports.createUser = [check('firstname').not().isEmpty().trim().escape().withMessage('Please enter a first name.'),
  check('lastname').not().isEmpty().trim().escape().withMessage('Please enter a last name.'),
  check('email', 'Your email is not valid').not().isEmpty().trim().escape().isEmail().normalizeEmail(),
  check('password', 'Your password must be at least 8 characters').not().isEmpty().trim().escape().isLength({min: 8}),
  check('confirmPassword', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
  check('code').not().isEmpty().trim().escape().withMessage('Please enter a register code.')];


exports.addStudent = [check('firstname').not().isEmpty().trim().escape().withMessage('Please enter a first name.'),
  check('lastname').not().isEmpty().trim().escape().withMessage('Please enter a last name.'),
  check('dob').not().isEmpty().trim().escape().withMessage('Please enter a date of birth.'),
  check('address').not().isEmpty().trim().escape().withMessage('Please enter an address.'),
  check('contactName', 'Please enter a contact name.').not().isEmpty().trim().escape(),
  check('contactPhone').not().isEmpty().trim().escape().isNumeric().isLength({min: 10, max:10}).withMessage('Please enter a 10 digit phone number.'),
  check('belt').not().isEmpty().trim().escape().withMessage("Please select a belt.")];


  exports.resetPassword = [check('email', 'Your email is not valid').not().isEmpty().trim().escape().isEmail().normalizeEmail()];

  exports.authenticate = [check('email', 'Your email is not valid').not().isEmpty().trim().escape().isEmail().normalizeEmail(),
    check('password', 'Your password must be at least 8 characters').not().isEmpty().trim().escape().isLength({min: 8})];
