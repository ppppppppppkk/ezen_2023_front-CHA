

// 자료형 변환 
    // 1. 문자열 입력
const input = prompt( 'message' , "기본값" );
    // 코드 실행순서 [ 컴퓨터는 멀티x ]
    // 1. prompt ( 'message' , "기본값" );      :[실행] 클라이언트에게 입력받은 알람ㅎ마수
    // 2. prompt () 결과/반횐/리턴된 값          :[실행 결과]
    // 3. const input = 리턴된 값               :[실행 결과 저장]

alert( input );

    // 2. 불 입력       [confirm() : 확인[true]/취소[false] 를 반환하는 알람함수]
const input2 = confirm('수락하시겠습니까?');
alert( input2 );

    // 3. 숫자 자료형으로 변환하기 [Number() : 문자열 자료형을 숫자형으로 변환하는 함수]
console.log( Number("273") );
console.log( Number("a") );     //NaN => not a number // 숫자로 표현할수 없어..
console.log( Number(true) );   //true = 1 , false = 0

    // 4. 숫자 연산을 사용해 자료형 변환하기[*단 숫자+"문자열" : 연결연산자 조심..]
console.log( "52-3" );            // 49      결과의 자료형이 숫자 로 변환
console.log( "true - 1" );        // 0       
console.log( true + 1 );           // 2

    // 5. 문자열 자료형으로 변환하기 [String() : 문자열로 변환 함수.]
console.log( String(52,273) );      // 52.273 -> "52.273"
console.log( true );                // true -> "true" 이렇게 바뀐다.

console.log( 52.273+"");            // 52.273 -> "52.273" [연결 연산자 이용]
console.log( true +"");             //  true -> "true"

    // 6. 불 자료형으로 변환하기 [Boolean() : 불 자료형으로 변환 함수 ]
console.log( Boolean(0) );          //false
console.log( Boolean(NaN) );        //false
console.log( Boolean("") );         //false
console.log( Boolean(null) );       //false
let 변수 = 10 ;
console.log( Boolean(변수) );       //false


    // 7. 논리 부정 연산자를 사용해 자료형 변환하기 
console.log( !273 );                // 0-> false, 1-> true , 273 -> true -> !273 -> false
console.log( !!273 );               // 
console.log( !!0 );                 // 0 -> false -> true -> false

const rowInput = prompt('inch 단위의 숫자를 입력해주세요.');
const inch = Number( rawInput );
const cm = inch * 2.54;
alert(`${inch}inch는 ${cm}cm입니다. `);



function 변환기능(){  
    const 인치 = document.querySelector('input');
    console.log( 인치.value );
        // document : HTML 뜻
        // query    : 질의 / 요청
        // Selector : 선택
        //document.querySelector() : HTML에 요소 선택.
}
    // function 함수명 ( 매개변수 ){구현할기능코드}
    //변수 = let , 상수 = const , 함수 = function   선언 약속/규칙/문법
    //결과 = input에 입력받은 value를 h3 [innerHTML=마크업 사이에] 에 대입
    document.querySelector('h3').innerHTML = `${ 인치.value * 2.54}cm`

// p.125 확인문제 3번
const cm정수 = prompt("cm 단위의 숫자를 입력해주세요.");
const 인치 = Number(cm정수) / 2.54;
alert(`${cm정수}cm는 ${인치}inch 입니다.`);


//4번 문제
let 반지름 = Number(prompt('원의 반지름을 입력해주세요.'));

console.log(` 원의 넓이 : ${3.14 * 반지름 * 반지름} / 원의 둘레 : ${2 * 3.14 * 반지름} `);

//5번문제
const 금액 = prompt("달러 단위의 금액을 입력하세요");
const 달러 = Number(금액);
const 원화 = 달러*1207;

console.log(`달러 : ${달러} -> 원화 : ${원화}`)

//6번 문제
// - 각 생활에서 사용되는 기계/프로그램 만들기


