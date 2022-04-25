let newWord = "";
const isPalindrom = function(word){
    for(let i = word.length-1; i >= 0; i--){
        newWord += word[i];
    }
    console.log(word.toUpperCase() === newWord.toUpperCase());
}
isPalindrom("Abba")