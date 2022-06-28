// ES6에 새롭게 추가된 기본 매개변수

function drawChart(width=200, height=400){ // 미리 값을 지정해주는것 -> 기본값
    console.log(`${width} X ${height} 차트를 그림`);
}
drawChart(100);
drawChart();  // 값을 넣지 않으면 처음에 지정한 기본값 출력


function drawChart2(width=200, height=width){
    console.log(`${width} X ${height} 차트를 그림`);
}
drawChart2(300);
drawChart2();