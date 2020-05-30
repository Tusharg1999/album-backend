const User = require("../../schema/user");
const { debugLog } = require("../../utils/logger")

async function home(req, res) {
    const user = await getUserData(req);
    if (user === null) res.status(400).send({ msg: "Something Wrong" })
    res.status(200).send({ data: user });
}
async function getUserData(req) {
    let currentUser = null;
    const userId = req.user;
    try {
        const response = await User.findOne({ _id: userId });
        const { email, username, name, imageUrl, images, bio, gender } = response
        currentUser = {
            email, username, name, imageUrl, images, bio, gender
        }
    } catch (e) {
        debugLog(e);
    }
    return currentUser;
}
module.exports = { home };
