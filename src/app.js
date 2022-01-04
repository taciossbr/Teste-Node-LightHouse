const express = require("express");
const UsersController = require("./controllers/UsersController");


function createApp(dbConnection) {
  const usersController = new UsersController(dbConnection)
  const app = express()
  
  app.use(express.json())
  
  app.route('/users').post(usersController.create)

  return app
}



module.exports = createApp