const joi = require("@hapi/joi");

function validator(body) {
    const joiSchema = joi.object({
        username: joi.string().min(5).required(),
        password: joi.string().min(6).required()
    })
    return joiSchema.validate(body);
}

module.exports = validator;