const express = require('express');
const router = express.Router();
const { getUsersController, createUsersController } = require('../controllers/users.controller.js');

router.get('/api', getUsersController);

router.post('/api', createUsersController);

module.exports = router;