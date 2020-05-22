const jwt = require('jsonwebtoken');
const { debugLog } = require("../../utils/logger");


async function generateJWT(payload) {
    const token = await jwt.sign({ payload }, process.env.SECRET_KEY, {
        expiresIn: 604800
    })
    debugLog(token)
    return token;
}
module.exports = { generateJWT }