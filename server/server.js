const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const testRouter = require('./routes/test.route.js');

const app = express();
const PORT = process.env.PORT || 5000;
const server = 'http://localhost:';

// testing multiple db connections

const mainConn = mongoose.createConnection(process.env.MONGO_URI, { useNewUrlParser: true });
const mflixDbConn = mongoose.createConnection(process.env.MONGO_URI_SAMPLE_MFLIX);

mainConn.on('error', () => console.log('Failed to connect to MongoDB'));
mainConn.once('open', () => console.log('Connected to server'));

mflixDbConn.on('error', () => console.log('Failed to connect to MongoDB'));
mflixDbConn.once('open', () => console.log('Connected to server'));

module.exports = mflixDbConn;

// testing multiple db connections

app.use(express.json());
app.use(cors());

app.use('/test', testRouter);

app.listen(PORT, () => {
    console.log(`Running server on: ${server}${PORT}`);
})