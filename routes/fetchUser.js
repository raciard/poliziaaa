const config = require('../config')

var express = require('express')
var router = express.Router()

const jwt = require("jsonwebtoken")
const mongoose = require('mongoose')

const User = require('../models/user')


router.use(require('../middleware/auth'))
router.use(require('../middleware/isAdmin'))


router.post("/", (req, res) => {
   
        //asddasd
        
        User.find((err, users) => {
            if(err){
                res.status('500').send('Errore')
                return
            }
            else{
                res.send({ok: true, users})
                
            }   
        })
})

module.exports = router;
