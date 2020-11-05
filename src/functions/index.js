const sendMessage = require('../helper/sendMessage');
let chatterBot = require('../helper/chatterbot');

function handleActions(senderId, messContent, entry, req) {
    let pythonShellResponce = chatterBot({
    	args: [messContent]
    });
    pythonShellResponce.end(function (err, code, replyText) {
    	console.log(err, code, replyText);
	  	sendMessage(senderId, replyText);
	});
}

module.exports = handleActions;
