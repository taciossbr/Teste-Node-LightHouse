const createApp = require("./app");
const connection = require("./database/connection");

const app = createApp(connection)

app.listen(8080)