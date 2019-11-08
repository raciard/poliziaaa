const config = require('../config')

var express = require('express')
var router = express.Router()

const jwt = require("jsonwebtoken")
const mongoose = require('mongoose')

const criminali = require('../models/criminali')


router.use(require('../middleware/auth'))


router.post("/", (req, res) => {
   
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
})

module.exports = router;