const httpStatus = require("../../utils/status");
const { debugLog } = require("../../utils/logger");

async function apiKeyInterceptor(req, res, next) {
    const apiKey = req.headers['api_key'];
    if (apiKey !== process.env.API_KEY) return res.status(httpStatus.badRequest.status).send(httpStatus.badRequest.text);
    debugLog("pass correct apiKey")
    next();
}
module.exports = { apiKeyInterceptor };
