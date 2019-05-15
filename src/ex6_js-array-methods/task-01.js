 function sliceMethodAnalog(arr, begin, end) {
	var res = [];
	var i;
	var thisIsEnd = end;
	var thisIsbegin = begin;
    if (!begin) {
       thisIsbegin = 0;
    }
    if (!end) {
       thisIsEnd = arr.length;
    }
    if (thisIsbegin < 0 && thisIsEnd < 0){
		for (i = arr.length + thisIsbegin; i < arr.length + thisIsEnd; i++){
            res.push(arr[i]);
        }
    } else { 
		for (i = thisIsbegin; i < thisIsEnd; i++){
        res.push(arr[i]);
		}
	}
    return res;
}
module.exports = sliceMethodAnalog;