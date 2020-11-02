const constants = require('../constant');
const sendMessage = require('../helper/sendMessage');

function getChatBotName(senderId) {
    let replyText = 'Tên tôi là: ' + constants.CHAT_BOT_NAME;

    sendMessage(senderId, replyText);
}

module.exports = {
    getChatBotName: getChatBotName
};
