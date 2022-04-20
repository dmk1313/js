let stroka;
const hesh = function(stroka){
    if(stroka.length > 140){
        console.log(Boolean(false));
    }
    else if (stroka.trim() == ''){
        console.log(Boolean(false));
    }
    else {
        console.log("#" + stroka.split(/\s/).map(word => word[0].toUpperCase() + word.substring(1)).join(""));
    }
}
hesh("")