const Users = require('../models/users.model.js');

// get user depending on request
const getUsersController = async (req, res) => {

    if(req.query.first && req.query.last) {

        const firstName = req.query.first.charAt(0).toUpperCase() + req.query.first.slice(1);
        const lastName = req.query.last.charAt(0).toUpperCase() + req.query.last.slice(1);
        const fullName = `${firstName} ${lastName}`;

        try {
            const requestedUser = await Users.find({ name: fullName });
            res.json(requestedUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }

    } else {

        try {
            const firstUser = await Users.findOne();
            res.json(firstUser);
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
        
    }

}

// get a single user

// const getUserController = async (req, res) => {
//     try {
        
//     } catch (error) {
        
//     }
// }

// create a single user
const createUsersController = async (req, res) => {
    try {
        const newUser = await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { getUsersController, createUsersController }