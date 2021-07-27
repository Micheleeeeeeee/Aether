const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const static = require('node-static')
const http = require('http')
const crypto = require('crypto');
dotenv.config();

const server = express();

const privateKey = process.env.PRIVATE_KEY;
const port = process.env.PORT;

server.get('/', (request, response) => {
    response.status(200).json({
        "failed": false,
        "message": "This works!",
        "exitCode": 0
    })
})

server.get('/private/404test', (request, response) => {
    // const file = new(static.Server)(__dirname + "/errors/404.html")
    return response.sendFile(__dirname + "/errors/404.html");
})

server.get('/private/generatekey', (request, response) => {

    if (!request.query.key)
        return response.status(403).json({
            "failed": true,
            "message": "You are not allowed to generate a key."
        })

    if (!request.query.key == privateKey)
        return response.status(403).json({
            "failed": true,
            "message": "You are not allowed to generate a key."
        })

    return response.json({
        "failed": false,
        "message": crypto.randomBytes(64).toString('hex')
    })
})

server.get('*', (request, response) => {
    return response
            .status(404)
            .sendFile(__dirname + "/errors/404.html")
})

server.listen(port);
console.log("Listening on port: " + port);