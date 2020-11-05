const sendMessage = require('../helper/sendMessage');
const chatterBot = require('../helper/chatterbot');
const {getNameChatBot} = require('./getName');
const {getNowTime} = require('./getTime');

function handleActions(senderId, messContent, entry, req) {
	chatterBot({
    	args: [messContent]
    }).then(function (responses) {
    	let replyText = '';
    	console.log("Sent: ", senderId, messContent, responses);

    	switch (responses[2]) {
    	case 'get_now_time_@function':
    		replyText = responses[5] + ' ' + getNowTime();
    		break;
    	case 'get_chatbot_name_@function':
    		replyText = responses[5] + ' ' + getNameChatBot();
    		break;
    	default: replyText = responses[2];
    	}

    	sendMessage(senderId, replyText);
    });
}

module.exports = handleActions;
