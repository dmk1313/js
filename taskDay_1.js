let stroka;
const hesh = function(stroka){
    //if (stroka == stroka.toUpperCase())
    if(stroka.length > 144){
        console.log("Error");
    }
    else if (stroka == "" || stroka == " "){
        console.log("Empty");
    }
    else {
        console.log("#" + stroka.split(/\s/).map(word => word[0].toUpperCase() + word.substring(1)).join(""));
    }
}
hesh("Hello world")