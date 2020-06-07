const cors = require("cors")
const express = require("express");
const helmet = require("helmet");

const Routes = require("../../api/routes");
const { debugLog } = require("../../utils/logger");
const { apiKeyInterceptor } = require("../../api/middlewares/apiKeyInterceptor");

module.exports = async function expressLoader(app) {
    app.use(cors());
    app.use(helmet());
    app.use(express.static("uploads"))
    app.use(await apiKeyInterceptor)
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/", Routes)
}