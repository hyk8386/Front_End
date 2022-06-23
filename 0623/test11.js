// for - in 기능 (키/값을 별도로 출력)
const store = {snack: 1000, flower:5000, beverage: 2000};

for(var item in store){

    if(!store.hasOwnProperty(item)) continue;

    console.log(item + '는 가격이' + store[item] + '입니다.');
}