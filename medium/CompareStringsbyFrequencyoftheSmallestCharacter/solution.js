var numSmallerByFrequency = function(queries, words) {
    let sfQueries = turnIntoSF(queries) 
    let sfWords = turnIntoSF(words);

    let result = sfQueries.map((query)=>{
        let count = 0;
        for(let i = 0; i < sfWords.length ; i++){
            if(query < sfWords[i]){count++}
        }
        return count;
    })
    return result
};

const turnIntoSF = (arr)=>{
    return arr.map((currentQuery) =>{
        let workingWord = breakIntoSortedArr(currentQuery);
        workingWord = removeHigherLexValues(workingWord);
        return findLowestFrequency(workingWord)
    });
}

const breakIntoSortedArr = (str)=>{
    return str.split('')
        .sort((a, b)=> a.localeCompare(b));
}

const removeHigherLexValues = (arr) =>{
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === arr[0]){
            result.push(arr[i])
        }
    }
    return result;

}
const findLowestFrequency = (arr) =>{
    let computedCharacters = {};
    let lowest = Infinity;
    for(let i = 0 ; i < arr.length ; i++){
        if( !computedCharacters[arr[i]]  ){
            computedCharacters[arr[i]] = {count: 1}
        }
        else{
            computedCharacters[arr[i]].count++
        }
    }
    Object.keys(computedCharacters).forEach((char)=>{
        if(computedCharacters[char].count < lowest){
            lowest = computedCharacters[char].count;
        }
    })
    return lowest
    }
