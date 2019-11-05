const mongoose = require('mongoose')

module.exports = mongoose.model('Criminali', { 
    name: String,
    surname: String,
    birth: String,
    date: String,
    crimes: String,
    sanction: String
 })