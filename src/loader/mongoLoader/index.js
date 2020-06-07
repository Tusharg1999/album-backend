const mongoose = require("mongoose");
const { debugLog } = require("../../utils/logger");

module.exports = async function mongoLoader() {
    const db = await mongoose.connect("mongodb://localhost:27017/album", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    if (db) {
        debugLog("db is connected");
    }
};
