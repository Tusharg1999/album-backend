const jwt = require("jsonwebtoken")
const httpStatus = require("../../../utils/status");
const { debugLog } = require("../../../utils/logger");

async function authorizeToken(req, res, next) {
    const token = req.headers['authorization'];
    // if there isn't any token
    debugLog(token)
    if (token === undefined) return res.status(httpStatus.invalid.status).send(httpStatus.invalid.text + " token");

    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(httpStatus.invalid.status).send(err)
        debugLog(decoded.payload._id);
        req.user = decoded.payload._id;
    })
    next();
}
module.exports = { authorizeToken };