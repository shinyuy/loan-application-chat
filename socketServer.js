const express = require('express');
const socket = require('socket.io');

var app = express();
var server = app.listen(4000, function(){
    console.log('Socket Server Listening on port 4000');
});

// Socket setup
const io = socket(server);

io.on('connection', function(socket){
    console.log('Socket Connection On');
});
