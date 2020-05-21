const bcrypt = require("bcryptjs")


const validator = require("./validation/index");
const httpStatus = require("../../../utils/status");
const { debugLog } = require("../../../utils/logger");
const User = require("../../../schema/user");

const register = async function (req, res) {
    const { error } = validator(req.body);
    if (error)
        res.status(httpStatus.validationError.status).send(error.message);
    if (await usernameExist(req.body) || await userEmailExist(req.body))
        res.status(httpStatus.conflict.status).send(httpStatus.conflict.text);
    await createUser(req.body)
    res.status(httpStatus.created.status).send(httpStatus.created.text)

}


async function usernameExist({ username }) {
    const response = await User.findOne({ username });
    debugLog(response);
    return response === null ? false : true
}

async function userEmailExist({ email }) {
    const response = await User.findOne({ email });
    debugLog(response);
    return response === null ? false : true
}

async function createUser({ email, username, name, password }) {
    try {
        const genSalt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, genSalt);
        await User.create({ email, name, username, password: hashPassword, salt: genSalt });
    } catch (e) {
        debugLog(e)
    }
}
module.exports = { register };