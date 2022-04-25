let n = 0;
let k = 0;
let gl=["a","A", "e","E", "i", "I", "o", "O", "u", "U", "y", "Y"];
let sogl=["b","B", "c", "C", "d", "D", "f","F", "g","G", "h","H", "j","J", "k","K", "l","L", "m","M", 
"n","N", "p","P", "q","Q", "r","R", "s","S", "t","T", "v","V", "w","W", "x","X", "y","Y", "z","Z"];
const getWordStructure = function(word){
    for(i = 0; i < word.length; i++){
        for(j = 0; j < gl.length; j++){
            if(word[i] === gl[j] ){
                n++;
            }
        }    
        for(q = 0; q < sogl.length; q++){
            if(word[i] === sogl[q]){
                k++;
            }
        }    
    }
    console.log("Слово " + word + " состоит из " + n + " гласных и "+ k + " согласных" )
}
getWordStructure("Andrey HUESUS")