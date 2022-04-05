const express = require('express');
const router = express.Router();

const {
    getAllUsersController,
    getUsersController, 
    createUsersController, 
    updateUserController, 
    deleteUserController 
} = require('../controllers/users.controller.js');


const parseName = (req, res, next) => { // convert name to correct capitalization

    let firstName = req.body.name.split(" ")[0].toLowerCase();
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    let lastName = req.body.name.split(" ")[1].toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    res.fullName = `${firstName} ${lastName}`;

    next();
}

router.get('/api', getAllUsersController);

router.get('/api/filtered', getUsersController);

router.post('/api', parseName, createUsersController);

router.patch('/api', parseName, updateUserController);

router.delete('/api', parseName, deleteUserController);

module.exports = router;