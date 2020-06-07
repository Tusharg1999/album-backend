const { isDevelopment } = require("../../config");

function debugLog(msg) {
    if (isDevelopment()) {
        console.log(msg);
    }
}

function errorLog(msg) {
    if (isDevelopment()) {
        console.error(msg);
    }
}

module.exports = { debugLog, errorLog }
