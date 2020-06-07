const Image = require("../../schema/image");
const User = require("../../schema/user");
const { debugLog } = require("../../utils/logger")

async function imageHandler(req, res) {
    await imageUplader(req);
    res.send(req.files)
}
async function imageUplader(req) {
    let images = [];
    req.files.forEach(element => {
        const obj = {
            name: element.originalname,
            location: req.body.location,
            imageUrl: process.env.HOSTING + process.env.PORT + "/" + element.filename
        }
        images.push(obj)
    });

    const response = await Image.insertMany(images);
    let imageIds = [];
    response.forEach((item) => {
        imageIds.push(item._id);
    })
    imageAndUserBinder(imageIds, req);
}
async function imageAndUserBinder(imageIds, req) {
    await User.updateOne({ _id: req.user }, {
        $push: { images: imageIds }
    })
}
module.exports = imageHandler
