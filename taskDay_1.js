let a;
const hesh = function(stroka){
    
    if (!stroka.trim()){
        return false;
    }
    a = stroka.split(/\s/).map(word => word[0].toUpperCase() + word.substring(1)).join("");
    if (a.length > 139){
        return false;
    }
    else {
        console.log("#" + a);
    }
}
hesh("asdf asdf sdf")