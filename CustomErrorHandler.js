
const {StatusCodes,ReasonPhrases} = require("./httpStatusCode")

class CustomError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
    }
}



class NotFoundError extends CustomError {
    constructor(message = ReasonPhrases.NOT_FOUND,statusCode=StatusCodes.NOT_FOUND) {
        super(message,statusCode)
    }
}



class InternalServerError extends CustomError {
    constructor(message =ReasonPhrases.INTERNAL_SERVER_ERROR,statusCode=StatusCodes.INTERNAL_SERVER_ERROR) {
        super(message,statusCode)
    }
}

module.exports = { NotFoundError, InternalServerError }