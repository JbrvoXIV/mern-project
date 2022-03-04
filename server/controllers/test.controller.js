const Users = require('../models/sample_mflix/users.model.js');

const testController = async (req, res) => {
    try {
        const randomUser = await Users.findOne();
        res.json(randomUser);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { testController }