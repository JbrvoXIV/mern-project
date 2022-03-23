const Users = require('../models/users.model.js');

// get user depending on request
const getUsersController = async (req, res) => {
    const requestedUser = await Users.findOne({ name: res.fullName });
    if(requestedUser) {
        return res.status(200).json(requestedUser);
    } else {
        return res.status(404).json({ message: 'User Not Found' });
    }
}

// create a single user
const createUsersController = async (req, res) => {
    try {
        const newUser = await Users.create({ ...req.body });
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

// update a single user
const updateUserController = async (req, res) => {
    try {
        const updatedUser = await Users.findOneAndUpdate(
            { name: res.fullName }, 
            { ...req.body },
            { new: true }
        );
        return res.status(201).json(updatedUser);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
}

// deletes a single user
const deleteUserController = async (req, res) => {
    try {
        const user = await Users.findOne({ name: res.fullName });
        await user.remove();
        return res.status(200).json({ message: `Succesfully deleted user ${res.fullName}` });
    } catch (error) {
        return res.status(404).json({ message: `User ${res.fullName} was not found` });
    }
}

module.exports = { 
    getUsersController, 
    createUsersController, 
    updateUserController,
    deleteUserController
}