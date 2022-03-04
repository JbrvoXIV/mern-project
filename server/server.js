const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const testRouter = require('./routes/test.route.js');

const app = express();
const PORT = process.env.PORT || 5000;
const server = 'http://localhost:';

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.connection.on('error', () => console.log('Failed to connect to MongoDB'));
mongoose.connection.once('open', () => console.log('Connected to server'));

app.use(express.json());
app.use(cors());

app.use('/test', testRouter);

const myDB = mongoose.connection.useDb('sample_airbnb');
const myCollection = myDB.collection('listingsAndReviews');

app.get('/', async (req, res) => {
    try {
        const data = await myCollection.findOne();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to retrieve data' });
    }
})

app.listen(PORT, () => {
    console.log(`Running server on: ${server}${PORT}`);
})