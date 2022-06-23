var x = 5;  // 숫자형
var y = 'five';  // 문자형
var isTrue = true;  // boolean형
var empty = null;  // null
var nothing;  // undefined
var sym = Symbol('me');  // Symbol



var item = {
    price : 5000,
    count : 10
};  // 객체 (Object)

// ----------- 위의 내용은 데이터의 종류 


let fruits = ['apple', 'orange', 'kiwi'];  // 배열 선언
let addFruit = function(fruit){
    fruits.push(fruit);
} // 함수
addFruit('watermelon');  // 함수 실행
console.log(fruits);  // 콘솔 출력
