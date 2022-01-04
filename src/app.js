const express = require("express");
const AuthController = require("./controllers/AuthController");
const UsersController = require("./controllers/UsersController");


function createApp({dbConnection, jwtSecret}) {
  const usersController = new UsersController(dbConnection)
  const authController = new AuthController(dbConnection, jwtSecret)
  const app = express()
  
  app.use(express.json())
  
  app.route('/users').post(usersController.create)
  app.route('/login').post(authController.login)

  return app
}



module.exports = createApp