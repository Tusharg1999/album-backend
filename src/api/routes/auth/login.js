const express = require('express');
const login = require('../../../modules/auth/login');

const router = express.Router();

router.post("/", login);

module.exports = router;