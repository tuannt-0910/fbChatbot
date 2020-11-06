const fs = require('fs');
const path = require('path');
const dataFolderPath = path.join(__dirname, '/../data');
const peopleFilePath = dataFolderPath + '/people.json';
/*
	user {
		fbId: number,
		name: string,
		isMotel: bool,
		isMyBossFamily: bool,
		isMyFriendBoss: bool,
		birthday: string,
	}
*/

function loadUsersInFile() {
	let peopleFile = [];

	try {
		peopleFile = require(peopleFilePath);
	} catch(err) {
		// pass
	}

	return peopleFile;
}

function findPersion(fbId) {
	let peopleFile = loadUsersInFile();

	if (peopleFile && peopleFile.length) {
		return peopleFile.find(function (persion) {
			return persion.fbId == fbId;
		});
	}

	return null;
}

function savePersion(persionData) {
	let peopleFile = loadUsersInFile();
	const user = findPersion(persionData.fbId);

	if (!user) {
		const userData = makeDataPersion(persionData);
		peopleFile.push(userData);
		savePeopleToJsonFile(peopleFile);

		return true;
	}

	return false;
}

function makeDataPersion(persionData) {
	return {
		fbId: persionData.fbId,
		name: persionData.name || '',
		isMotel: persionData.isMotel || false,
		isMyBossFamily: persionData.isMyBossFamily || false,
		isMyFriendBoss: persionData.isMyFriendBoss || false,
		birthday: persionData.birthday || ''
	};
}

function savePeopleToJsonFile(users) {
	usersJson = JSON.stringify(users);

	//check folder data exist
	if (!fs.existsSync(dataFolderPath)) {
		fs.mkdirSync(dataFolderPath);
	}

	fs.writeFile(peopleFilePath, usersJson, 'utf8', function(err) {
		// pass
	});
}

function updateUser(fbId, persionData) {
	const peopleFile = loadUsersInFile();

	const newPeopleFile = peopleFile.map(function(userInFile) {
		if (userInFile.fbId == fbId) {
			return makeDataPersion({
				fbId: fbId,
				name: persionData.name !== 'undefined' ? persionData.name : userInFile.name,
				isMotel: persionData.isMotel !== 'undefined' ? persionData.isMotel : userInFile.isMotel,
				isMyBossFamily: persionData.isMyBossFamily !== 'undefined' ? persionData.isMyBossFamily : userInFile.isMyBossFamily,
				isMyFriendBoss: persionData.isMyFriendBoss !== 'undefined' ? persionData.isMyFriendBoss : userInFile.isMyFriendBoss,
				birthday: persionData.birthday !== 'undefined' ? persionData.birthday : userInFile.birthday
			});
		}

		return userInFile;
	});
	savePeopleToJsonFile(newPeopleFile);

	return true;
}

function deleteUser(fbId) {
	let peopleFile = loadUsersInFile();
	let newPeople = [];

	peopleFile.map(function(userInFile) {
		if (userInFile.fbId != fbId) {
			newPeople.push(userInFile);
		}
	});
	savePeopleToJsonFile(newPeople);

	return true;
}

module.exports = {
	loadUsersInFile,
    findPersion,
    updateUser,
    savePersion,
    deleteUser
};
