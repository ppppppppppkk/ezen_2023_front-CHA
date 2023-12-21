


const l = 123.456789;
console.log( l.toFixed(2) ); //123.46
console.log( l.toFixed(3) ); //123.457


const m = Number('숫자로 변환할 수 없는 경우');
console.log( m );
console.log( m === NaN )
console.log( Number.isNaN(m) );


const n = 10/0 ;
console.log( n );

const o = -10/0 ;
console.log( o );

Number.isFinite(n)
console.log( isFinite(n) );

Number.isFinite(o)
console.log( isFinite(o) );

Number.isFinite(1)
console.log( isFinite(1) );

Number.isFinite(10)
console.log( isFinite(10) );



// 문자열 양쪽 끝에 공백 없애기
console.log(`        앞과                  뒤에 공백도 들어감     `.trim() );


const timeList = "12:30\n15:21";
console.log(timeList);
const timeArray = timeList.split("\n"); //2조각
console.log( timeArray );
const time = timeArray[0];
console.log( time );
const hour = time.split(":")
console.log( hour );
const timeOject = { hour : hour[0], min : hour[1] };
console.log( timeOject );


// JSON ; 다른 애플리케이션과 통신할때 교환 목적 활용
        //1. JS 객체 --> JSON 문자열 : JSON,stringify()
        //2. JSON문자열 --> JS객체 : JSON.parse()