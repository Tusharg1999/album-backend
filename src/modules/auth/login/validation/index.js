const joi = require("@hapi/joi");

function validator(body) {
    const joiSchema = joi.object({
        email: joi.required().min(5).email().string(),
        password: joi.required().min(6).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
    return joiSchema.validate(body);
}

module.exports = validator;