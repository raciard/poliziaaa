const User = require('../models/user')
const config = require('../config')

var express = require('express')
var router = express.Router()
const jwt = require('jsonwebtoken')

router.use(require('../middleware/auth'))
router.use(require('../middleware/isAdmin'))

router.post('/:id', async (req, res) => {
    
    try{
        let user = await User.findByIdAndDelete(req.params.id)
        res.send({done: true})
    }
    catch(err){
        res.status('403').send({done: false, cause: 'Id non trovato'})
    }
})

module.exports = router