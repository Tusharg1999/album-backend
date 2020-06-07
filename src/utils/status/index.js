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
    badRequest: {
        status: 400,
        text: "Bad Request"
    },
    invalid: {
        status: 401,
        text: "Invalid"
    },
    notFound: {
        status: 404,
        text: "Not Found"
    },
    forbidden: {
        status: 403,
        text: "forbidden"
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