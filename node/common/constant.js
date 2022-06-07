const userTypes = {
  ADMIN: 'ADMIN',
  BASIC_USER: 'BASIC_USER',
}

const SALT_ROUNDS = 10;
const collectionsName = {
  USERS: 'users'
}
const statusCode = {
  OK: 200,
  BAD_INPUT: 400,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500
}
const status = {
  OK: 'OK',
  BAD_INPUT: 'BAD_INPUT',
  UNAUTHORIZED: 'UNAUTHORIZED',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR'
}
const responseMessages = {
  USER_CREATED: 'User created successfully',
  USER_NOT_FOUND: 'Invalid email, user not found',
  LOGIN_SUCCESS: 'User logged in successfully',
  INVALID_PASSWORD: 'Invalid password, please check your password again',
  EMAIL_ALREADY_EXIST: 'Email already in use, please try different email',
  INTERNAL_SERVER_ERROR: 'Something went wrong, please try again'
}

module.exports = { userTypes, collectionsName, statusCode, status, responseMessages, SALT_ROUNDS }