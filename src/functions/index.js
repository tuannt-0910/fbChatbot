const sendMessage = require('../helper/sendMessage');
let chatterBot = require('../helper/chatterbot');

function handleActions(senderId, messContent, entry, req) {
    let pythonShellResponce = chatterBot({
    	args: [messContent]
    });
    pythonShellResponce.receive(function (replyText) {
    	console.log('finished');
	  	sendMessage(senderId, replyText);
	});
}

module.exports = handleActions;
