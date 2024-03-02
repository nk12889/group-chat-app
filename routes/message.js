const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res, next) => {
    res.send('<form action="/send-message" method="POST" ><input id="message" type="text" name="message" placeholder="Type message"><button type="submit">Send</button></form>')
});

router.post('/send-message', (req, res) => {
    const { message } = req.body;
    const username = req.app.locals.username;

    if (username && message) {
        // Store the message in a file in JSON format
        const data = JSON.stringify({ username, message }) + '\n';

        fs.appendFile('messages.json', data, (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Internal Server Error');
            } else {
                res.send('Message sent!');
            }
        });
    } else {
        res.status(400).send('Invalid request');
    }
});

router.get('/read-messages', (req, res) => {
    // Read messages from the file (for simplicity, using fs.readFile)
    fs.readFile('messages.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            // Parse the JSON data and send it
            const messages = data.split('\n').filter(Boolean).map(JSON.parse);
            res.json(messages);
        }
    });
});

module.exports = router;
