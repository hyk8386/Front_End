//정규표현식(Regular Expression)은 문자열에서 특정 내용을 찾거나 대체 또는 발췌하는데 사용

//각각 다른 포맷으로 저장된 엄청나게 많은 전화번호 데이터를 추출해야 할 때
//사용자가 입력한 이메일, 휴대폰 번호, IP 주소 등이 올바른지 검증하고 싶을 때
//코드에서 특정 변수의 이름을 치환하고 싶지만, 해당 변수의 이름을 포함하고 있는 함수는 제외하고 싶을 때
//특정 조건과 위치에 따라서 문자열에 포함된 공백이나 특수문자를 제거하고 싶을 때


const str = 'To lose your path is the way to find that path';

const sensitiveCaseRegex = /to/;    // 'g'플래그 없이는 최초에 발견된 문자만 반환
const ignoreAllCaseRegex = /to/gi;  
const findRangeRegex =- /([a-f])\w+/i;  // a or b or c or d or e or f
const findAllRangeRegex = /([a-f])\w+/gi;

// i: 대소문자 구분 없음(Case Insensitive) -> 정규식은 기본적으로 대소문자를 구분(Case sensitive). i 플래그를 통해 대소문자 구분을 사용하지 않을 수 있다.
// g: 문자열 내의 모든 패턴을 검색


console.log(str.match(sensitiveCaseRegex));
console.log(str.match(ignoreAllCaseRegex));
console.log(str.match(findRangeRegex));
console.log(str.match(findAllRangeRegex));


// ("문자열").match(/정규표현식/플래그) -> "문자열"에서 "정규표현식"에 매칭되는 항목들을 배열로 반환
