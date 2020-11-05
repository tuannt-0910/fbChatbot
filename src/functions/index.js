const sendMessage = require('../helper/sendMessage');
let chatterBot = require('../helper/chatterbot');

function handleActions(senderId, messContent, entry, req) {
    let replyTextResponcePromise = chatterBot({
    	args: [messContent]
    });
    replyTextResponcePromise.then(function (replyText) {
    	sendMessage(senderId, replyText);
    });
}

module.exports = handleActions;
