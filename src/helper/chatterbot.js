const {PythonShell} = require('python-shell');
const path = require('path');
const chatterBotResponsePath = path.join(__dirname, '/../chatterbot/chatterBotResponse.py');

async function  callChatterBot(options = null) {
	return new await Promise((resolve, reject) => {
		PythonShell.run(chatterBotResponsePath, options, (err, results) => {
	    	if (err) return reject(err);

	        return resolve(results);
	    });
	});
}

module.exports = callChatterBot;
