const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const testRouter = require('./routes/test.route.js');

const app = express();
const PORT = process.env.PORT || 3000;
const server = 'http://localhost:';

mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(cors());
app.use('/test', testRouter);

app.get('/', (req, res) => {
    res.status(200).send(`<h1>Main Page</h1>`);
});

app.listen(PORT, () => {
    console.log(`Running server on: ${server}${PORT}`);
})