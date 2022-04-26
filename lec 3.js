// console.log("1 ---- " + true || true);
// console.log(true || false);
// console.log(false || true);

// console.log(true && true);
// console.log(true && false);

let item_1 = 0;
let item_2 = 20;
// while(item_1 < 20){
//     console.log(item_1 + " = idi kushat");
//     item_1++;
// }
let names = ['Katya', 'Alex', 'Carl', 'Rol']
for(item_1 of names){
    if(item_1 == 'Carl'){
        break;
    }

    console.log(item_1)
}
