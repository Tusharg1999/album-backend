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
    date: Date.now
})
const Image = mongoose.models("images", imageSchema);