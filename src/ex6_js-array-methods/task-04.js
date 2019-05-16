function filterToNewArray(arr, callback) {
	var result = 0;
	var newArray = [];
	for (var i = 0; i < arr.length; i++) { 
 		result = callback (arr[i], i, arr);
 		if (result > 0) newArray.push(arr[i]);
	} 
	return newArray;
} 
function callFilter(item, i, arr){ 
	return item * i - arr.length;
}
module.exports = filterToNewArray;