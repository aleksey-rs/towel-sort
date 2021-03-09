
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix === null || matrix.length <= 0){
    return [];
  }
  let result = [];
  matrix.forEach(function(element, i) {
    if(i%2 == 0) {
      result = result.concat(element);
    }else{
      result = result.concat(element.reverse());
    }
  });
  return result;
}
