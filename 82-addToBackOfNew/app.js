// Write your function here
function addToBackOfNew (arr, element){
    let NewArr = arr.slice();
    NewArr.push(element);
    return NewArr;
}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]