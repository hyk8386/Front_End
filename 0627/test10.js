// ES6에 추가된 화살표 함수 ( => )

/*
function double(x){
    x+x;
}
*/
const double = x => x+x;
console.log(double(2));


function add(a,b){
    return a+b;
}
// const add = (a,b) => a+b;
console.log(add(1,2));


//const sum = (...args) => {
function sum(...args){
    let total = 0;
    for(let i=0; i<args.length; i++){
        total += args[i];
    }
    return total;
}
console.log(sum(1, 2, 3));


setTimeout(() => {
    console.log('화살표 함수')
}, 10);