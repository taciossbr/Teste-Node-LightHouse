const express = require("express");
const {errors} = require('celebrate');

const { JWT_SECRET } = require("./config");
const loginRequired = require("./middleware/auth");
const AuthController = require("./controllers/AuthController");
const UsersController = require("./controllers/UsersController");
const UsersValidator = require("./validators/UsersValidator");
const AuthValidator = require("./validators/AuthValidator");



function createApp({dbConnection, jwtSecret}) {
  const usersController = new UsersController(dbConnection)
  const authController = new AuthController(dbConnection, JWT_SECRET)
  const app = express()
  
  app.use(express.json())
  
  app.route('/users').post(UsersValidator.create, usersController.create)
  app.route('/users').get(loginRequired(JWT_SECRET), UsersValidator.list, usersController.list)
  app.route('/users/:id').put(loginRequired(JWT_SECRET), UsersValidator.update, usersController.update)
  app.route('/login').post(AuthValidator.login, authController.login)

  app.use(errors())
  
  return app
}



module.exports = createApp