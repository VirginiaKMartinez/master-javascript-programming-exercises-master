// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
  let newArr = [];
  for(let i in obj[key]){
    if(obj[key][i] < 100){
      newArr.push(obj[key][i]);
    }
  }
  return newArr;
}

var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]