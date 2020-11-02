const getName = require('./getName');
const defaultCase = require('./default');
const sendMessage = require('../helper/sendMessage');

function handleActions(senderId, messContent, entry, req) {
    let replyText= defaultCase.defaultCase();

    if (getName.isGetChatBotName(messContent)) {
        replyText = getName.getChatBotName(senderId);
    }

    sendMessage(senderId, replyText);
}

module.exports = handleActions;
