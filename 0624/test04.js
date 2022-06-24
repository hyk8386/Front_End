// 삼항 연산자 (조건 연산자)

let condition = 5 > 10;
(condition) ? console.log('left') : console.log('right');

let result = (condition) ? (
    console.log("삼항연산자 참 값 표현 "),
    "표현식1"
):(
    console.log("삼항연산자 거짓 값 표현 "),
    "표현식2"
);
console.log(result);