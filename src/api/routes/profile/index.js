const express = require("express");
const { profile } = require("../../../modules/profile");
const { authorizeToken } = require("../../middlewares/authorization");

const router = express.Router();

router.post("/", authorizeToken, profile);

module.exports = router;
