function promiseForHomework(mustDo){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log('doing homework');
            if(mustDo){
                resolve({
                    result: 'homework-result'
                });
            } else {
                reject(new Error('Too lazy'));
            }
        }, 3000); // 시간이 3초 지날때까지 기다림
    });
};

const promiseA = promiseForHomework(true); // 함수를 호출하면서 true를 줌
console.log('promiseA created');

const promiseB = promiseForHomework(); // 함수를 호출하면서 false를 줌 (기본값 false)
console.log('promiseB created');

promiseA.then(v => console.log(v));
promiseB
    .then(v => console.log(v))
    .catch(e => console.error(e));