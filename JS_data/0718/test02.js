// 배열의 길이 구하기

const ship = {
    max: 4,
    passengers: [],
    onBorad: function(name){
        if(this.passengers.length === 4){
            console.log(`this ship full. ${name} can not board this ship.`);
        } else {
            this.passengers.push(name);
            console.log(`${name} board`);
        }
    }
}

ship.onBorad('chole');
ship.onBorad('jay');
ship.onBorad('david');
ship.onBorad('asher');
ship.onBorad('daniel');
console.log(ship.passengers);