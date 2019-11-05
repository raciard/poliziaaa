const config = require('../config')

var express = require('express')
var router = express.Router()

const jwt = require("jsonwebtoken")
const mongoose = require('mongoose')

const criminali = require('../models/criminali')

router.post("/", (req, res) => {
    console.log(req.body.jwt)
    let user = jwt.verify(req.body.jwt, config.secret)
    console.log(user)
    if(user.user == config.username){
        //asddasd
        
        criminali.find((err, crim) => {
            if(err){
                res.status('500').send('Errore')
                return
            }
            else{
                res.send({ok: true, criminals: crim})
            }   
        })


    }
    else res.status('403').send('errore di autenticazione')
})

module.exports = router;