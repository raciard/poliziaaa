const jwt = require('jsonwebtoken')
const config = require('../config')
const User = require('../models/user')

module.exports = async (req, res, next) => {
    let user = await User.findOne({userName: req.user})

    console.log(req.user)
    if(user){
        if(user.admin){
            next()
        }
        else{
            res.status('402').send({done: false, cause: 'Accesso negato'})
        }
    }
    else{
        res.status('401').send({done: false, cause: 'Accesso negato'})
    }

    
    


}