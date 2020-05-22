const httpStatus = require("../../utils/status");

async function apiKeyInterceptor(req, res, next) {
    const apiKey = req.headers['api_key'];
    if (apiKey !== process.env.API_KEY) return res.status(httpStatus.badRequest.status).send(httpStatus.badRequest.text);

    next();
}
module.exports = { apiKeyInterceptor };
