const express = require("express");

const { authorizeToken } = require("../../middlewares/authorization")
const upload = require("../../middlewares/fileStorage")
const ImageUploader = require("../../../modules/uploadImages")

const router = express.Router();

router.post("/", [authorizeToken, upload.array("photos", 12)], ImageUploader);

module.exports = router
