let n='';
const printSmile = function (stroka, numberOfRows){
    for(let i = 0; i<numberOfRows; i++){
        n+=stroka;
        console.log(n)
    }
}
printSmile(":)", 5)