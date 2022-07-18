// 배열의 특정 요소 위치 확인 - indexOf
// 배열.indexOf(검색할 값, 시작 인덱스) 
const arr = ['spring', 'summer', 'fall', 'winters', 'is', 'down']

console.log(`"winter" is in this index ${arr.indexOf('winters')}`);
console.log(`"winter" is not in here, look this value ${arr.indexOf('winters', 4)}`);