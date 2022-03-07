const express = require('express');
const router = express.Router();

const {
    getUsersController, 
    createUsersController, 
    updateUserController, 
    deleteUserController 
} = require('../controllers/users.controller.js');


const parseName = (req, res, next) => {
    
    if(req.query.fname && req.query.lname) {
        const firstName = req.query.fname.charAt(0).toUpperCase() + req.query.fname.slice(1);
        const lastName = req.query.lname.charAt(0).toUpperCase() + req.query.lname.slice(1);
        const fullName = `${firstName} ${lastName}`;
        
        res.fullName = fullName;
    }
    
    next();
}

router.get('/api', parseName, getUsersController);

router.post('/api', createUsersController);

router.patch('/api', parseName, updateUserController);

router.delete('/api', parseName, deleteUserController);

module.exports = router;