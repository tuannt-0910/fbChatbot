const today = new Date();  

function getNowTime() {
	return today.getHours() + " : " + today.getMinutes();
}

module.exports = {
    getNowTime
};
