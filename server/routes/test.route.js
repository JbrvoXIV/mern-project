const express = require('express');
const router = express.Router();
const { testController } = require('../controllers/test.controller.js');

router.get('/', testController);

module.exports = router;