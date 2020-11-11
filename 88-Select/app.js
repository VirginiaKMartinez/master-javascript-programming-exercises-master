// Write your function here
function select(arr,obj){
    let newObj ={};
    let i =0;
    for (let i in obj){
        if(arr.includes(i)){
            newObj[i]=obj[i];
        }
    }
    return newObj;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }