// Write your function here
function addToFrontOfNew(arr, element) {
  let arrNew = arr.slice();
  arrNew.unshift(element);
  return arrNew;
}
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]