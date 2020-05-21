const express = require("express");

const RegisterRoutes = require("./auth/register");
const LoginRoutes = require("./auth/login");

const router = express.Router();

router.use("/register", RegisterRoutes);
router.use("/login", LoginRoutes);

module.exports = router;