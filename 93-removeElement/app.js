// Write your function here
function removeElement (arr,disc){
    let newArr =[];
        for(let i=0; i<arr.length; i++){
            if(arr[i]!== disc){
                newArr.push(arr[i]);
            }
        }
    return newArr;
}

var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]