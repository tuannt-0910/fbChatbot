const sendMessage = require('../helper/sendMessage');
const chatterBot = require('../helper/chatterbot');
const {getNameChatBot} = require('./getName');
const {getNowTime, getNowDateTime, getDayName} = require('./getTime');

function handleActions(senderId, messContent, entry, req) {
	chatterBot({
    	args: [messContent]
    }).then(function (responses) {
    	let replyText = '';

    	switch (responses[2]) {
    	case 'get_now_time_@function':
    		replyText = responses[5] + ' ' + getNowTime();
    		break;
    	case 'get_chatbot_name_@function':
    		replyText = responses[5] + ' ' + getNameChatBot();
    		break;
    	case 'get_day_name_@function':
    		replyText = responses[5] + ' ' + getDayName();
    		break;
    	case 'get_day_@function':
    		replyText = responses[5] + ' ' + getDayName();
    		break;
    	default: replyText = responses[2];
    	}

		console.log("---------- Start -----------");
		console.log("Sent from: ", senderId);
    	console.log("- time: ", getNowDateTime());
    	console.log("- content: ", messContent);
    	console.log("- responses: ", responses);
    	console.log("- replyText: ", replyText);

    	sendMessage(senderId, replyText);

    	console.log("---------- End -----------");
    });
}

module.exports = handleActions;
