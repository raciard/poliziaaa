const config = require('../config')

var express = require('express')
var router = express.Router()
const bcrypt = require('bcrypt')
var User = require('../models/user')




router.use(require('../middleware/auth'))
router.use(require('../middleware/isAdmin'))


router.post("/", async (req, res) => {

        if(!req.body.newUser.username || !req.body.newUser.password){
            res.status('400').send('Dati mancanti')
            return
        }

        cryptedPass = await bcrypt.hash(req.body.newUser.password, 10)
        let user = new User({
            userName: req.body.newUser.username,
            password: cryptedPass,
            admin: false
        })
        user.save().then(() => console.log(user))
        res.send({ok: true})

})

module.exports = router;