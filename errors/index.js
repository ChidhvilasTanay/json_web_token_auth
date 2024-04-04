// this file is for fetching all the errors at once from a single source

const CustomAPIError = require('./custom-error')
const badRequest = require('./bad_request')
const unauthenticated = require('./unauthenticated')

module.exports = {
    CustomAPIError,
    badRequest,
    unauthenticated
}