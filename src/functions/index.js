const sendMessage = require('../helper/sendMessage');
let chatterBot = require('../helper/chatterbot');

function handleActions(senderId, messContent, entry, req) {
	chatterBot({
    	args: [messContent]
    }).then(function (responses) {
    	let replyText = '';
    	switch () {
    	case 'get_now_time':
    		break;
    	case 'get_chatbot_name':
    		break;
    	default: replyText = responses[2];
    	}

    	sendMessage(senderId, responses[2]);
    });
}

module.exports = handleActions;
