// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
  let newArr = [];
  for(let i in obj[key]){
    if(obj[key][i] === 10){
      newArr.push(obj[key][i]);
    }
  }
  return newArr;
}

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]