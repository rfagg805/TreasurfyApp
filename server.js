const express = require('express');
const app = express();
const session = require('express-session');


// Path
const path = require('path');

// CORS
const cors = require('cors');
app.use(cors());

// Static Directory
app.use(express.static(__dirname + '/client/dist'));

// Body Parser 
const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app)

//socketIO
let http = require('http');

// - - - - = = = = Server Listener = = = = - - - - 
const server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
    console.log('user connected', socket.id);

    socket.on('new-message', (message) => {
        io.emit('new-message', message);
    });
});