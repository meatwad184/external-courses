function sliceMethodAnalog(arr, begin, end) {
	var newArr = [];
	var start, stop;
	if (!begin) {
		start = 0;
	} else {
		start = begin;
	}
	if (!end || end >= arr.length) {
		stop = arr.length;
	} else stop = end;
	if (begin < 0) stop += arr.length;
	if (end < 0) stop += arr.length;
	for (var i = start; i < stop; i++) {
		newArr.push(arr[i]);
	}
	return newArr;
}
module.exports = sliceMethodAnalog;