const sendMessage = require('../helper/sendMessage');
let chatterBot = require('../helper/chatterbot');

async function handleActions(senderId, messContent, entry, req) {
    let replyText = await chatterBot({
    	args: [messContent]
    });
    sendMessage(senderId, replyText);
}

module.exports = handleActions;
