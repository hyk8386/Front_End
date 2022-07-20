const str = 'abcdefghijklmnopqrstuvwxyz';
const arr = str.split('');  // 배열로 변환 - 문장을 분리 시킴
arr.reverse();  // 배열을 역순으로 정렬

console.log(arr.join('')); // 하나로 합침