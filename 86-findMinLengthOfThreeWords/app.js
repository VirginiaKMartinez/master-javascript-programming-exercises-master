// Write your function 
function findMinLengthOfThreeWords (word1, word2, word3){
    if (word1<word2 && word1<word3){
        return word1.length;
    } else if(word2<word1 && word2<word3){
        return word2.length;
    }else {
        return word3.length;
    }
}

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1