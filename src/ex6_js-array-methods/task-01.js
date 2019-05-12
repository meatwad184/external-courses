function sliceMethodAnalog(array, begin, end){
	var copyArray = [];
	var start = begin;
	var stop = end;
	if(!start && !stop){
		copyArray = array
	} 
	for(var i = 0; i < array.length; i++){
		if (start < 0 && start !== stop){
			copyArray.push(array[array.length + start]);
			start++;
		} else if (!stop && stop < array.length){
			copyArray.push(array[start]);
			start++;
		} else if (start < stop && start < array.length) {
			copyArray.push(array[start]);
			start++;
		}
	}
	return copyArray;
}
module.exports = sliceMethodAnalog;