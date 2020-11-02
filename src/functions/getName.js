const constants = require('../constant');
const checkStringMeaning = require('../helper/checkStringMeaning');

function isGetChatBotName(messContent) {
    if (checkStringMeaning(
        messContent,
        [
            'Tên bạn là gì'
        ]
    )) {
        return true;
    }

    return false;
}
function getChatBotName(senderId) {
    return 'Tên tôi là: ' + constants.CHAT_BOT_NAME;
}

module.exports = {
    getChatBotName,
    isGetChatBotName
};
