const criminali = require('../models/criminali')
const config = require('../config')

var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')

router.use(require('../middleware/auth'))


router.post('/:id', async (req, res) => {
    
    try{
        let criminale = await criminali.findByIdAndDelete(req.params.id)
        res.send({done: true})
    }
    catch(err){
        res.status('400').send({done: false, cause: 'Id non trovato'})
    }
})

module.exports = router