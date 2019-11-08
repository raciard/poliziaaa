const config = require('../config')

const bcrypt = require('bcrypt')
var express = require('express')
var router = express.Router()
var User = require('../models/user')
const jwt = require("jsonwebtoken")

router.post("/", async (req, res) => {
    
    if(!req.body.user || !req.body.password){
       res.status('400').send('Mancano certe cose')
       return 
    }

    User.find({}, (user) => {
        console.log(user)
    })
    let user = await User.findOne({userName: req.body.user})

    if(user){
    if(await bcrypt.compare(req.body.password, user.password)){
        let token = jwt.sign({user: req.body.user}, config.secret)
        res.send({authenticated: true, jwt: token})
    }
    else res.status('401').send({authenticated: false})
    }else res.status('402').send({authenticated: false})
})

module.exports = router;