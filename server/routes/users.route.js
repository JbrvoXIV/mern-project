const express = require('express');
const router = express.Router();

const {
    getUsersController, 
    createUsersController, 
    updateUserController, 
    deleteUserController 
} = require('../controllers/users.controller.js');


const parseName = (req, res, next) => {
    
    if(req.query.first && req.query.last) {
        const firstName = req.query.first.charAt(0).toUpperCase() + req.query.first.slice(1);
        const lastName = req.query.last.charAt(0).toUpperCase() + req.query.last.slice(1);
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