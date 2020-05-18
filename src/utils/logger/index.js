const { isDevelopment } = require("../../config");

const mode = "development"
function debugLog(msg) {
    console.log(msg);
}

function errorLog(msg) {
    console.error(msg);
}

if (isDevelopment()) {
    module.exports = { debugLog, errorLog }
}