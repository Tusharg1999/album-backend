const express = require("express");

const HomeModule = require("../../../modules/home")
const { authorizeToken } = require("../../middlewares/authorization");


const router = express.Router();

router.get('/', authorizeToken, HomeModule.home)

module.exports = router
