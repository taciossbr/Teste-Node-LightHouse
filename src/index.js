const createApp = require("./app");
const dbConnection = require("./database/connection");

const app = createApp({dbConnection})

app.listen(8080)