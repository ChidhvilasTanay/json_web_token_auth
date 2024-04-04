const {unauthenticated, badRequest} = require("../errors")
require('express-async-errors')
const jwt = require('jsonwebtoken')
require('dotenv')


const authMiddleware = async(req, res, next) =>{
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new unauthenticated('Please provide token')
    }
    const token = authHeader.split(' ')[1]
    //verification i.e verify() method of the jwt needs a try and catch block
    try{
        const decoded = jwt.verify(token, process.env.WEB_TOKEN)
        const {id, username}= decoded
        req.user =  {id, username}
        next()
    }
    catch(error){
            throw new badRequest('invalid token')
    }
}

module.exports = authMiddleware