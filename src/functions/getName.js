const constants = require('../constant');

function getChatBotName() {
    let replyText = 'Tên tôi là: ' + constants.CHAT_BOT_NAME;

    sendMessage(senderId, replyText);
}

module.exports = {
    getChatBotName: getChatBotName
};
