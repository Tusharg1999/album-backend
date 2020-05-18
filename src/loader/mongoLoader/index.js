const mongoose = require("mongoose");

module.exports = async function mongoLoader() {
    const db = await mongoose.connect("mongodb://localhost:27017/album", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    if (db) {
        console.log("db is connected");
    }
};
