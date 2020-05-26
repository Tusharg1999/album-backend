
const validator = require("./validation");
const { debugLog } = require("../../utils/logger");
const User = require("../../schema/user");


async function profile(req, res, next) {
    const { error } = validator(req.body)
    if (error) res.status(400).send(error)
    try {
        await updateProfile(req)
    } catch (e) {
        debugLog(e);
    }
    res.status(200).send("ok")

}

async function updateProfile(req) {
    debugLog("start updating")
    await User.updateOne({ _id: req.user }, { ...req.body });
    debugLog("end updating");
}

module.exports = {
    profile
};
