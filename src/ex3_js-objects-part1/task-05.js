function copyObj(obj) {
	var copyObj = {};	
		for (var key in obj) {
			if(obj[key]){
			copyObj[key] = obj[key]
			}
		}
		return copyObj
}
module.exports = copyObj