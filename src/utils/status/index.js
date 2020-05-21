const httpStatus = {
    ok: {
        status: 200,
        text: "Ok"
    },
    accepted: {
        status: 202,
        text: "Accepted"
    },
    validationError: {
        status: 422,
        text: "some validationError"
    },
    conflict: {
        status: 406,
        text: "User Already Exist with same email or username"
    }
}
module.exports = httpStatus;