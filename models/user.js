// models/user.js
const mongoose = require('mongoose');


module.exports = mongoose.model('user', {
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },

    admin: {
        type: Boolean,
        required: false
    }
});