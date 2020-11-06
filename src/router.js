const express = require('express');
let app = express.Router();
const handleActions = require('./functions/index');
const VALIDATION_TOKEN = process.env.VALIDATION_TOKEN;

var queue = [];
var active = false;
var check = function() {
    if (!active && queue.length > 0) {
        var f = queue.shift();
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
    var entries = req.body.entry;

    for (var entry of entries) {
        var messaging = entry.messaging;
        for (var message of messaging) {
            var senderId = message.sender.id;
            if (message.message) {
                if (message.message.text) {
                    var text = message.message.text;

                    queue.push(function() {
                        active = true;

                        exec("exec queue", function() {
                            handleActions(senderId, message.message, text, entry, req);
                            active = false;
                            check();
                        });

                        check();
                    });
                }
            }
        }
    }

    res.status(200).send("OK");
});

module.exports = app;
