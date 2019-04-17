function objAdd(arg, obj) {
	var objCopy = obj;
	if (typeof arg === 'string') {
		if (obj.hasOwnProperty(arg)) {
		return true;
		}
			objCopy[arg] = 'new'
	}
return objCopy
}
module.exports = objAdd; 