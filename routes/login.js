const config = require('../config')

var express = require('express')
var router = express.Router()

const jwt = require("jsonwebtoken")

router.post("/", (req, res) => {
    
    console.log(req.body)
    console.log(config.user + " " + config.password)
    if(req.body.user == config.username && req.body.password == config.password){
        let token = jwt.sign({user: req.body.user}, config.secret)
        res.send({authenticated: true, jwt: token})
    }
    else res.status('401').send({authenticated: false})
})

module.exports = router;