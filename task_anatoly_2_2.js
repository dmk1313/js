const fs = require('fs')
const  persons = JSON.parse(fs.readFileSync("./task2.json"))

let uniquePersons = []
// persons.forEach((el) => {
//     if (uniquePersons.indexOf(JSON.stringify(el)) === -1) {
//         uniquePersons.push(JSON.stringify(el));
//     }
//   });
//let el;
for(el of persons){
    if (uniquePersons.indexOf(JSON.stringify(el)) === -1){
        uniquePersons.push(JSON.stringify(el));
    }
} 

 console.log(uniquePersons)
 console.log(persons.length)
 console.log(uniquePersons.length)