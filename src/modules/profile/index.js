
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
    let newProfile = {
        ...req.body,
    }
    if (req.file !== undefined) {
        imageUrl = process.env.HOSTING + process.env.PORT + "/" + req.file.filename
        newProfile = {
            ...newProfile,
            imageUrl
        }
    }
    debugLog(newProfile.imageUrl)

    debugLog("start updating")
    await User.updateOne({ _id: req.user }, { ...newProfile });
    debugLog("end updating");
}

module.exports = {
    profile
};
