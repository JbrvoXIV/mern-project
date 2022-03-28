const express = require('express');
const router = express.Router();

const {
    getAllUsersController,
    getUsersController, 
    createUsersController, 
    updateUserController, 
    deleteUserController 
} = require('../controllers/users.controller.js');


const parseName = (req, res, next) => { // convert incoming first name and last name to correct capitilization
    
    if(req.query.fname && req.query.lname) {
        let firstName = req.query.fname.toLowerCase();
        firstName = req.query.fname.charAt(0).toUpperCase() + req.query.fname.slice(1);
        
        let lastName = req.query.lname.toLowerCase();
        lastName = req.query.lname.charAt(0).toUpperCase() + req.query.lname.slice(1);

        const fullName = `${firstName} ${lastName}`;
        
        res.fullName = fullName;
    }
    next();
}

router.get('/api', getAllUsersController);

router.get('/api/filtered', getUsersController);

router.post('/api', parseName, createUsersController);

router.patch('/api', parseName, updateUserController);

router.delete('/api', parseName, deleteUserController);

module.exports = router;