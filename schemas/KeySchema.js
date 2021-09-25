const mongoose = require('mongoose');

const KeySchema = new mongoose.Schema({
    userEmail: String,
    keyTime: Date,
    key: String
})

module.exports = KeySchema;