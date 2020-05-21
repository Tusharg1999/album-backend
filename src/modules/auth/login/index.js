const validator = require("./validation/index");

const login = async function (req, res) {
    const validation = validator(req.body);
    console.log(validation.error);
    res.status(200).send("ok")
}

module.exports = login;