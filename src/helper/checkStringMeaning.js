function isStringInArray(checkString, targets) {
    for (let target of targets) {
        if (checkString.includes(target)) {
            return true;
        }
    }

    return false;
}

module.exports = {
    isStringInArray
};
