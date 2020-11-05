const {PythonShell} = require('python-shell');
const path = require('path');
const chatterBotResponsePath = path.join(__dirname, '/../chatterbot/chatterBotResponse.py');

async function callChatterBot(options = null) {
	const results = await new Promise((resolve, reject) => {
	    PythonShell.run(chatterBotResponsePath, options, function (err, results) {
			if (err) return reject(err);

	        return resolve(results);
		});
  	});

  	return results;
}

module.exports = callChatterBot;
