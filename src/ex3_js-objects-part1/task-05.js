function copyObj(obj) {
	var copyObj = {};	
		for (var key in obj) {
			copyObj[key] = obj[key]
		}
		return copyObj
}
module.exports = copyObj