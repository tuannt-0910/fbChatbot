const sendMessage = require('../helper/sendMessage');
let chatterBot = require('../helper/chatterbot');

function handleActions(senderId, messContent, entry, req) {
    let pythonShellResponce = chatterBot({
    	args: ['clgt']
    });
    pythonShellResponce.on('message', function (replyText) {
	  	sendMessage(senderId, replyText);
	});
}

handleActions(1,'asdas', 1, 1)

module.exports = handleActions;
