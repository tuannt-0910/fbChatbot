const today = new Date();
const dateNames = [
	"Thứ hai (Sunday)",
	"Thứ ba (Monday)",
	"Thứ tư (Tuesday)",
	"Thứ năm (Wednesday)",
	"Thứ sáu (Thursday)",
	"Thứ bảy (Friday)",
	"Chủ nhật (Saturday)"
];

function getNowTime() {
	return today.getHours() + ":" + today.getMinutes();
}

function getNowDateTime() {
	return today.getDay() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear() + ' ' + getNowTime();
}

function getDayName() {
	return dateNames[today.getMonth()];
}

module.exports = {
    getNowTime,
    getNowDateTime,
    getDayName
};
