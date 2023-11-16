const mongoose = require('mongoose');

// login schema
const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// login data collection model
const Logindb = new mongoose.model('logindb', loginSchema);

module.exports = Logindb;