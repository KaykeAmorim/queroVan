const jwt = require('jsonwebtoken')
const {JWTSecret} = require('../../config')

class Authorization {
    constructor(){

    }

    bind(req, res, next){
        
    }

    generateAccessToken(data){
        return jwt.sign({...data}, JWTSecret, {expiresIn: '24h'})
    }
}

module.exports = {
    Authorization
}