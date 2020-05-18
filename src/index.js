const Express = require("express");
require("dotenv").config();

const appLoader = require("./loader");
const { debugLog } = require("./utils/logger");

const PORT = process.env.PORT || 5000;
const app = Express();

async function startServer() {
    await appLoader(app);
    app.listen(PORT, () => {
        debugLog(`Server is Running on Port ${PORT}`)
    })
}
startServer();