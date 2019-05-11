function objTest(arg, obj) {
	if (typeof arg === 'string' && obj.hasOwnProperty(arg)) {
		return true
	}
		return false
}
module.exports = objTest;