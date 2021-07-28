const express = require('express');
const router = express.Router();
const path = require('path');
const crypto = require('crypto');

router.get('/', (request, response) => {
    return response.json(
        {
            "message": "Successful API request."
            , "author": "sillysock#0152"
        }
    )
})

router.get('/private/keys/generate', (request, response) => {
    const key = crypto.randomBytes(64).toString('hex')
    return response.json(
        {
            "key": key,
            "message": "Key successfully generated."
        }
    )
})

/**
 * Handle 404 errors (404 not found)
 * 
 * Sends a file denoted in ./ (root of project) errors/404.html
 * Public
 */

router.get('*', (request, response) => {
    return response
            .status(404)
            .sendFile(path.resolve('errors/404.html'))
})

module.exports = router;