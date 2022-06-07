const express = require('express');
const router = express.Router();
const { ValidationError } = require('joi');
const { validate } = require('../common/commonFn');
const { signup, login } = require('../controllers/users.controller');
const { signupValidation, loginValidation } = require('../validation/users.validation');

router.post('/signup', validate(signupValidation.body, 'body'), signup)
router.post('/login', validate(loginValidation.body, 'body'), login)

router.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }
  return res.status(500).json(err)
})
module.exports = router;
