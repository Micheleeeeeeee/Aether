const express = require('express'); // Express.js API
const dotenv = require('dotenv'); // Grab information from .env file 
const static = require('node-static') // idfk??
const crypto = require('crypto'); // Generate 64-byte keys
dotenv.config(); // idk

const server = express(); // *server* owo

const privateKey = process.env.PRIVATE_KEY; // Private key from .env
const port = process.env.PORT; // Port from .env

const GetRoot = require('./Routes/GET');
server.use('/', GetRoot);

server.listen(port);
console.log("Listening on port: " + port);