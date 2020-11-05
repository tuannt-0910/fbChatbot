const sendMessage = require('../helper/sendMessage');
let chatterBot = require('../helper/chatterbot');

function handleActions(senderId, messContent, entry, req) {
    let pythonShellResponce = chatterBot({
    	args: [messContent]
    });
    pythonShellResponce.run(function (rr, replyText) {
    	console.log('message: ' + replyText);
	  	sendMessage(senderId, replyText);
	});
}

module.exports = handleActions;
