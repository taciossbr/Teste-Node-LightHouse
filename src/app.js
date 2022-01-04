const express = require("express");
const { JWT_SECRET } = require("./config");
const AuthController = require("./controllers/AuthController");
const UsersController = require("./controllers/UsersController");
const loginRequired = require("./middleware/auth");


function createApp({dbConnection, jwtSecret}) {
  const usersController = new UsersController(dbConnection)
  const authController = new AuthController(dbConnection, jwtSecret)
  const app = express()
  
  app.use(express.json())
  
  app.route('/users').post(usersController.create)
  app.route('/users/:id').put(loginRequired(JWT_SECRET), usersController.update)
  app.route('/login').post(authController.login)

  return app
}



module.exports = createApp