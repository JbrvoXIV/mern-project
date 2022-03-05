const Users = require('../models/users.model.js');

const testController = async (req, res) => {
    try {
        const randomUser = await Users.find().limit(3).sort({ name: 1 });
        res.json(randomUser);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

module.exports = { testController }