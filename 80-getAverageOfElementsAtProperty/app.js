// Write your function here
function getAverageOfElementsAtProperty (obj, key){
  if (obj[key]==null) {
    return 0;
  } else if (obj[key].length === 0) {
    return 0;
  } else {
    var sum = 0;
    for (i = 0; i < obj[key].length; i++) {
      sum += obj[key][i];
    }
    return sum/(obj[key].length);
  }

}

var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2