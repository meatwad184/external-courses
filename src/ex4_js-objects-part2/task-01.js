function hasProtoProperty(name, obj){
	var proto = Object.getPrototypeOf(obj);
  if(typeof name === 'string' && proto.hasOwnProperty(name)){
    return proto[name];
  }
  return undefined;
}
module.exports = hasProtoProperty