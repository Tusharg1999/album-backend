const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        min: 3,
        required: true,
    },
    username: {
        type: String,
        min: 5,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    phoneNumber: {
        type: Number,
        max: 10,
        min: 10,
    },
    bio: {
        type: String,
        max: 300,
    },
    email: {
        type: String,
        unique: true,
    },
    gender: {
        type: String,
        min: 1,
        max: 1
    },
    token: {
        type: String,
    },
    imageUrl: {
        type: String
    },
    images: [{ type: mongoose.Schema.Types.ObjectID }]
});
const User = mongoose.model("user", userSchema);
module.exports = User;
