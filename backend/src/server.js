const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server) //allowing to use http and websocket

const connectedUsers = {};

io.on('connection', socket => {
    // console.log('Nova conexão', socket.id) // every user hava an ID inside the socket
    const { user } = socket.handshake.query
    console.log( user, socket.id)
    connectedUsers[user] = socket.id
})

mongoose.connect('mongodb+srv://iago:iago@cluster0-hogk8.mongodb.net/react-tinder-clone?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use((req, res, next) =>{
    req.io = io;
    req.connectedUsers = connectedUsers; //passing information here(server.js) to controllers

    return next();
})

app.use(cors()) // Must be before routes!!!
app.use(express.json()); // Allow usage of json at req.body
app.use(routes);

server.listen(3333);