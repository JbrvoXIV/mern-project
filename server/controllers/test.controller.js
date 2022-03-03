
const testController = (req, res) => {
    res.json({ success: true, message: 'testing backend frontend connectivity' });
}

module.exports = { testController }