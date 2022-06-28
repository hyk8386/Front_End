// const의 정상적인 실행 예제
// const는 재할당은 가능하지만 새로운 객체로 할당은 못하고
// 객체 내부의 상태만 변경 할 수 있다.


const CONST_USER = {name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);

// 내부상태 변경 -> 가능
CONST_USER.name = 'jay2';
CONST_USER.age = 31;
console.log(CONST_USER.name, CONST_USER.age);

// 불가능
CONST_USER = {name:'bbo'};


// const가 변수로 있을 때는 변경 불가능
const myName = 'kim';
myName = 'Lee';

