// Write your function here
function getOddLengthWordsAtProperty (object,key){
    let newArr=[];
    if (Array.isArray(obj[key])){
        for(let i=0; i<obj[key].length; i++){
            if(obj[key][i].length%2!=0){
                newArr.push(obj[key][i]);
            }
        }
    }
    return newArr;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']