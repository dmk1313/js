let n = 0;
let res = 2;
const step = function(n){
    for(let i = 1; i < n; i++){
        res *= 2;
    }
    console.log(res)
}

step(5);