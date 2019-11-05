const criminali = require('../models/criminali')
const config = require('../config')

var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')

router.post('/', (req, res) => {
    let user = jwt.verify(req.body.jwt, config.secret)
    console.log (req.body)
    if(user.user == config.username){
        //asddasd
        
        if(req.body.name && req.body.surname && req.body.birth && req.body.date && req.body.crimes && req.body.sanction){
        let criminale = new criminali({ name: req.body.name, surname: req.body.surname, birth: req.body.birth, date: req.body.date, sanction: req.body.sanction, crimes: req.body.crimes});
        criminale.save().then(() => res.send({done: true}))
        .catch(() => {
            res.status('500').send({done: false})
        })
    }

    }
})

module.exports = router