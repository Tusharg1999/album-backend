const cors = require("cors")
const express = require("express");
const helmet = require("helmet");
module.exports = async function expressLoader(app) {
    app.use(cors());
    app.use(helmet());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}