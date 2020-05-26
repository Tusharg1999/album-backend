const bcrypt = require("bcryptjs")

const validator = require("./validation/index");
const httpStatus = require("../../../utils/status");
const { generateJWT } = require("../../../services/jwtService");
const User = require("../../../schema/user");
const { debugLog } = require("../../../utils/logger");

const login = async function (req, res) {
    const { error } = validator(req.body);
    if (error) res.status(httpStatus.validationError.status).send(error.message);
    if (await userEmailExist(req.body) === false && await usernameExist(req.body === false)) res.status(httpStatus.notFound.status).send("User " + httpStatus.notFound.text);
    const result = await signIn(req.body);
    if (result.error === true) {
        res.status(httpStatus.invalid.status).send(httpStatus.invalid.text + " password");
    }
    res.status(httpStatus.ok.status).send(result.data)
}

async function usernameExist({ username }) {
    const response = await User.findOne({ username });
    return response === null ? false : true
}

async function userEmailExist({ email }) {
    const response = await User.findOne({ email });
    return response === null ? false : true
}

async function signIn(body) {
    debugLog(body.username)
    debugLog(body.password)
    const { password, salt, _id } = await User.findOne({ username: body.username });
    debugLog(password)
    const hashPassword = await bcrypt.hash(body.password, salt);
    if (hashPassword !== password) {
        return { data: { msg: "password do not match" }, error: true };
    }
    const token = await generateJWT({ _id })
    debugLog(token)
    await User.updateOne({ username: body.username }, { token });
    return {
        data: {
            msg: "Successfully Login",
            token
        }, error: false
    };
}
module.exports = login;