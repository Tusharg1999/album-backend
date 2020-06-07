const mongoLoader = require("./mongoLoader");
const expressLoader = require("./expressLoader");

module.exports = async function appLoader(app) {
    await expressLoader(app);
    await mongoLoader();
}