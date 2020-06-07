
function isProduction() {
    return process.env.NODE_ENV === "production";
}

function isDevelopment() {
    return process.env.NODE_ENV === "development"
}

module.exports = { isDevelopment, isProduction }