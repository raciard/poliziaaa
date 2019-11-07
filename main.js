const express = require('express')
let app = express()
const mongoose = require('mongoose')



app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'));


app.use('/login', require('./routes/login'))
app.use('/fetch', require('./routes/fetch'))
app.use('/add', require('./routes/add'))

mongoose.connect('mongodb+srv://admin:hH5EzfIihF56qci6@pasquale-0h0i3.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});


app.listen('80', () => {
    console.log('menchia sto listenando')
})
