const {PythonShell} = require('python-shell');
const path = require('path');
const chatterBotResponsePath = path.join(__dirname, '/../chatterbot/chatterBotResponse.py');

function callChatterBot(options = null) {
	console.log(options);
    return new PythonShell(chatterBotResponsePath, options);
}

module.exports = callChatterBot;
