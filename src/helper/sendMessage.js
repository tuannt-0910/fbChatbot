var request = require("request");

function sendMessage(senderId, message) {
    request({
        url: 'https://graph.facebook.com/v8.0/me/messages',
        qs: {
            access_token: PAGE_ACCESS_TOKEN,
        },
        method: 'POST',
        json: {
            recipient: {
                id: senderId
            },
            message: {
                text: message
            },
        }
    });
}

module.exports = sendMessage;
