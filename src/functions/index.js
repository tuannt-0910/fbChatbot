const sendMessage = require('../helper/sendMessage');
let chatterBot = require('../helper/chatterbot');

function handleActions(senderId, messContent, entry, req) {
    let pythonShellPromise = chatterBot({
    	args: [messContent]
    });
    pythonShellPromise.then(function (replyText) {
    	console.log('message: ' + replyText);
	  	sendMessage(senderId, replyText);
	});
}

module.exports = handleActions;
