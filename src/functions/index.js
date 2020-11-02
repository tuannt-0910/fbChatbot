const getName = require('./getName');

function handleActions(senderId, messContent, entry, req) {
    getName.getChatBotName();
}

module.exports = handleActions;
