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
        lowercase: true,
        validate: [isEmail, 'Incorrect email format'],
        required: true
    },
    birthday: { type: Date, required: true },
    favMovie: { type: String, required: true },
    favFood: { type: String, required: true },
    favColor: { type: String, required: true },
    favHobby: { type: String, required: true },
}, { versionKey: false });

module.exports = mongoose.model('Users', usersSchema, 'users');