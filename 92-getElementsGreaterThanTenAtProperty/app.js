// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
  let greaterThan10 = [];
  for (let i in obj) {
      for (let j = 0; j < obj[key].length; ++j){
        if (obj[key][j] > 10) {
          greaterThan10.push(obj[key][j]);
        }
      }
  }
  return greaterThan10;
}

var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]