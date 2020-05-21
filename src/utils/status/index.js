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
    }
}
module.exports = httpStatus;