const mongoose = require('mongoose');
const db = require('../../server.js');
const { isEmail } = require('validator');


const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        match: [/^[a-zA-Z]{3,}\s{1}[a-zA-Z]{3,}$`/, 'Incorrect name format'],
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

const Users = mongoose.model('Users', usersSchema, 'users');

// module.exports = Users;
