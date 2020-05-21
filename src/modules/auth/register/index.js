const validator = require("./validation/index");
const httpStatus = require("../../../utils/status");
const { debugLog } = require("../../../utils/logger");

const register = async function (req, res) {
    const { error } = validator(req.body);
    if (error)
        res.status(httpStatus.validationError.status).send(error.message)
}


module.exports = { register };