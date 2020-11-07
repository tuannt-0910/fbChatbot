const express = require('express');
let app = express.Router();
const handleActions = require('./functions/index');
const VALIDATION_TOKEN = process.env.VALIDATION_TOKEN;

let queue = [];
let active = false;
let check = function() {
    console.log(queue);
    if (!active && queue.length > 0) {
        let f = queue.shift();
        f();
    }
}

app.get('/', (req, res) => {
    res.send("Home page. Server running okay.");
});

app.get('/webhook', function(req, res) {
    if (req.query['hub.verify_token'] === VALIDATION_TOKEN) {
        res.send(req.query['hub.challenge']);
    }

    res.send('Error, wrong validation token');
});

app.post('/webhook', function(req, res) {
    let entries = req.body.entry;

    for (let entry of entries) {
        let messaging = entry.messaging;
        for (let message of messaging) {
            let senderId = message.sender.id;
            let messageContent = message.message;
            if (messageContent && messageContent.text) {
                let text = messageContent.text;

                queue.push(function() {
                    active = true;

                    exec("exec queue", function() {
                        handleActions(senderId, messageContent, text, entry, req);

                        active = false;
                        check();
                    });
                });

                check();
            }
        }
    }

    res.status(200).send("OK");
});

module.exports = app;
