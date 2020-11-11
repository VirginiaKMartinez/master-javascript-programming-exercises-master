// Write your function here
function countAllCharacters(str){
    let newObj={};
    for(let i in str){
        if(!newObj[str[i]]){ //compruebo que el string no existe
            newObj[str[i]]=1; //si no existe lo añade con valor de
        }else {
            newObj[str[i]]++; //si existe le suma
        }
    }
    return newObj;
}
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}