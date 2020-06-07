const express = require("express");
const { profile } = require("../../../modules/profile");
const { authorizeToken } = require("../../middlewares/authorization");
const uploads = require("../../middlewares/fileStorage");

const router = express.Router();

router.get("/", [authorizeToken, uploads.single("profileImage")], profile);

module.exports = router;
