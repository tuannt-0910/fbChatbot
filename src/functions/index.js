const getName = require('./getName');

function handleActions(senderId, messContent, entry, req) {
    getName.getChatBotName(senderId);
}

module.exports = handleActions;
