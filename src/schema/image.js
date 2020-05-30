const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        require: true
    },
    name: {
        type: String
    },
    location: {
        type: String
    },
})
const Image = mongoose.model("images", imageSchema);

module.exports = Image
