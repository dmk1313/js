//1*
let age = prompt("How old are you?") ;
let result;
const checkAge = function(age){
    //2*
    if(typeof(age) !== "number"){
        console.log("Error");
        age=Number(age); 
    }
    else{
    
    }
    if(age<18){
        console.log( "You don’t have access cause your age is " + age + " It’s less then ");
    }
    else if (age >= 18 && age < 60) {
     console.log("Welcome !");
    }
    else if (age > 60) {
        console.log("Keep calm and look Culture channel");
    }
    else{
        console.log("Technical work");
    }
    return result;
}
checkAge(17);
checkAge(18);
checkAge(61);

//2* and 3**
checkAge('17');
//4***
checkAge(age);