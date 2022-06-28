// const 에러유형 - 모두 실행 안됨

const URL = 'http://js.com';
URL = 'http://www.naver.com';

if(true){
    const URL2 = 'http://js.com';
}
console.log(URL2);
