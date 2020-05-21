const express = require("express");

const registerRoutes = require("./auth/register")

const router = express.Router();

router.use("/register", registerRoutes)

module.exports = router;