const httpStatus = {
    ok: {
        status: 200,
        text: "Ok"
    },
    created: {
        status: 201,
        text: "User Successfully created"
    },
    accepted: {
        status: 202,
        text: "Accepted"
    },
    invalid: {
        status: 401,
        text: "Invalid"
    },
    notFound: {
        status: 404,
        text: "Not Found"
    },
    conflict: {
        status: 406,
        text: "User Already Exist with same email or username"
    },
    validationError: {
        status: 422,
        text: "some validationError"
    },
}
module.exports = httpStatus;