function myTrim(str){
	if(str[0] === " " && str[str.length - 1] === " "){
	return str.slice(1, str.length -1);
	}
	return true;
}
module.exports = myTrim;