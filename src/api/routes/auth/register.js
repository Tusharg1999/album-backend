const express = require("express");
const { register } = require("../../../modules/auth/register");

const router = express.Router();

router.post("/", register)

module.exports = router