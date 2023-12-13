console.log('ㅎㅇ');


/*
    [배열, 객체, 자료 ]
    1. for( let i = 0 ; i<배열명,length ; i++){ }
    2. for( let i in 배열명 ){ }
    3. for( let v of 배열명 ){ }

*/

const todos = [ '우유구매', '업무메일 확인하기','필라테스 수업']
//1. - i는 0부터 마지막 인덱스까지 1씩증가하면서 console.log 반복 실행
for( let i = 0 ; i<todos.length ; i++){
    console.log( todos[i]);}
//2. - i는 todos배열내 요소 *인덱스를 하나씩 대입 받으면서 console.log 반복실행
for( let i in todos ){
    console.log( todos[i] );}
//3. - i는 todos배열내 요소 *값을 하나씩 대입 받으면서 console.log 반복 실행
for ( let i of todos){ console.log( i );}

//4. - i는 0부터 마지막인덱스까지 console.log 출력후 증가 반복 실행
let i = 0;
while( i<todos.length ){ console.log(i); i++; }

// 무한 루프
//let j = 0;
//while( true ){ alert(`${j}번째 실행합니다`); j++; }


let p = 0;
while ( confirm('계속 진행할까요?')){ //확인 true, 취소 =false
    alert(`${i}번째 반복입니다.`);
    p++;
} 


for( let m = 0; true ; m++ ){
    alert( `$[m]번째 반복입니다.`);
    const isContinue = confirm('계속 할까요?');
    if( !isContinue) {break; } //가장 가가운 for/while 탈출
}

//===
for ( ; ;){
    for( ; ;){
        if( 3 > 2) {break; }
    }
}

for( let m = 1 ; m<=10 ; m++){
    //만약에 m번쨰가 홀수 이면
    if( m % 2 === 1){ continue; }// 다시 반복문으로.
    //아니면 짝수 값을 누계
    output += m;
}
console.log( output );