const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://iago:iago@cluster0-hogk8.mongodb.net/react-tinder-clone?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors()) // Must be before routes!!!
server.use(express.json()); // Allow usage of json at req.body
server.use(routes);

server.listen(3333);