function cutString(str, limit) {
    if (str.length > limit) {
		var lmt = limit;
        lmt -= 1;
        return str.substr(0, lmt) + '…';
    }
	return str;
}
module.exports = cutString;