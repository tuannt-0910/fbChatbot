const sendMessage = require('../helper/sendMessage');
const chatterBot = require('../helper/chatterbot');
const {getNameChatBot} = require('./getName');
const {getNowTime, getNowDateTime, getDayName} = require('./getTime');
const {findPersion, savePersion, updateUser} = require('../modal/people');
const {getQuestionNameText} = require('./introduces');

function handleActions(senderId, message, messContent, entry, req) {
    const user = findPersion(senderId);

	// check reply old mess
	if (message && message.reply_to && message.reply_to.mid) {
		if (user && user.name == message.reply_to.mid) {
			updateUser(senderId, {
				name: message
			});

			console.log("---------- Introduce -----------");
			console.log("Sent from: ", senderId);
			console.log("- time: ", getNowDateTime());
			console.log("- name: ", message);

			sendMessage(senderId, 'Hi ' + message + ', em có thể giúp gì được ạ?');

			console.log("---------- End -----------");

			return ;
		}
	}

	chatterBot({
    	args: [messContent]
    }).then(function (responses) {
    	let replyText = '';

    	if (!user) {
			introduce(senderId, message, user);

			return ;
    	}

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

		replyMessage(senderId, message, messContent, responses, replyText);
    });
}

function introduce(senderId, message, user) {
	console.log("---------- New member -----------");
	console.log("Sent from: ", senderId);
	console.log("- time: ", getNowDateTime());
	console.log("- content: ", messContent);

	const replyText = getQuestionNameText();
	sendMessage(senderId, replyText);

	savePersion({
		fbId: senderId,
		name: message.mid
	});

	console.log("---------- End -----------");
}

function replyMessage(senderId, message, messContent, responses, replyText) {
	console.log("---------- Start -----------");
	console.log("Sent from: ", senderId);
	console.log("- time: ", getNowDateTime());
	console.log("- message: ", message);
	console.log("- content: ", messContent);
	console.log("- responses: ", responses);
	console.log("- replyText: ", replyText);

	sendMessage(senderId, replyText);

	console.log("---------- End -----------");
}

module.exports = handleActions;
