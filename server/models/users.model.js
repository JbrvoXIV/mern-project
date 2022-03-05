const mongoose = require('mongoose');
const { isEmail } = require('validator');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        match: [/^[a-zA-Z]{3,}\s{1}[a-zA-Z]{3,}$/, 'Incorrect name format'],
        required: true
    },
    email: {
        type: String,
        validate: [isEmail, 'Incorrect email format'],
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Users', usersSchema, 'users');

