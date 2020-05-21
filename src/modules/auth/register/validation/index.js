const joi = require("@hapi/joi");

function validator(body) {
    const joiSchema = joi.object({
        name: joi.string().min(6).required(),
        email: joi.string().min(6).required().email(),
        password: joi.string().min(6).required()
    })
    return joiSchema.validate(body);
}

module.exports = validator;