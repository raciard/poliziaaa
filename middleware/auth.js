const jwt = require('jsonwebtoken')
const config = require('../config')

module.exports = (req, res, next) => {
    const token = req.body.jwt
    if(!token){
         res.status(401).send({done: false, cause: 'Accesso negato, token mancante'})
         return
    }
    else{
    
    
        try{
            req.user = jwt.verify(token, config.secret).user
            next()
            
        }
        catch(err){
            res.status('400').send({done: false, cause: 'Accesso negato'})
        }
    }
}