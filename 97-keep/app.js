// Write your function here
function keep (array,keeper){
    let newArr=[];
    for(let i =0; i<array.length; i++){
        if(array[i]===keeper){
            newArr.push(array[i]);
        }
    }
    return newArr;
}

var output = keep([1, 2, 3, 2, 1], 2) 
console.log(output); //--> [2, 2]