const constant = require('../constant');

function getQuestionNameText() {
	return 'Hi, Chào anh chị, em là ' + constant.CHAT_BOT_NAME + ' em có thể xin tên của anh chị được không ạ?';
}

module.exports = {
    getQuestionNameText
};
