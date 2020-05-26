const multer = require("multer");
const crypto = require("crypto");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, "/uploads")
    },
    filename: function (req, file, cb) {
        return cb(null, crypto.randomBytes(16).toString("hex") + file.originalname)
    }
})

const fileFilter = function (req, file, cb) {
    if (file.mimetype === "image/jpg") {
        return cb(null, true)
    }
    return cb(new Error("File Should be of jpg Type"), false);
}

const uploads = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: 1024 * 1024 * 2,
})

module.exports = uploads