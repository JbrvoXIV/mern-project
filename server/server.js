const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const testRouter = require('./routes/test.route.js');

const app = express();
const PORT = process.env.PORT || 5000;
const server = 'http://localhost:';

mongoose.connect(process.env.MONGO_URI);

app.use(express.json());
app.use(cors());
app.use('/test', testRouter);

app.listen(PORT, () => {
    console.log(`Running server on: ${server}${PORT}`);
})