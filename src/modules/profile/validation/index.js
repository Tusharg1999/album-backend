const joi = require("@hapi/joi");


function validator(body) {
    const validationSchema = joi.object({
        name: joi.string().min(3),
        gender: joi.number().min(0).max(1),
        phoneNumber: joi.string().min(10).max(10),
        bio: joi.string().max(300)
    })
    return validationSchema.validate(body);
}

module.exports = validator;