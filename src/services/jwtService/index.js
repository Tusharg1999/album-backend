const jwt = require('jsonwebtoken');
const { debugLog } = require("../../utils/logger");
const { SECRET_KEY } = require('../../utils/constants');


async function generateJWT(payload) {
    const token = await jwt.sign({ payload }, SECRET_KEY, { expiresIn: 604800 })
    debugLog(token)
    return token;
}

module.exports = { generateJWT }