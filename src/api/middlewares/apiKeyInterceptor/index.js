const httpStatus = require("../../../utils/status");

async function apiKeyInterceptor(req, res, next) {
    const apiKey = req.body.headers['apiKey'];
    if (apiKey !== process.env.API_KEY) return res.status(httpStatus.badRequest.status).send(httpStatus.badRequest.text);

    next();
}