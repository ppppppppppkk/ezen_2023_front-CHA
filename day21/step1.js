// Math 객체 (new)

// 0이상 ~ 1미만 사이의 난수
const num = Math.random();
console.log( num );

console.log( num * 10);

console.log( num * 50);

console.log( num * 50 + 1);

console.log( num * 50 -25 );

console.log( Math.floor( 3.14 ) );  //Math.floor 소수점버림
console.log( parseInt( 3.14 ) );    // parseInt() 정수로 변환
console.log( 3.14.toFixed(0) );     // 반올림

console.log( Math.floor( num * 50 - 5 ) );
console.log( Math.floor( num * 50 - 25 ) );




const object = {
    name : '혼자공부하는파이썬',
    price : 18000,
    publisher: '한빛미디어'
}

if ( object.name !== undefined){
    console.log('name 속성이 있습니다.')
} else {
    console.log( 'name 속성이 없습니다.')
}

if ( object.author !== undefined){
    console.log( 'author 속성이 있습니다.')
}else {
    console.log('author 속성이 없습니다.')
}



