/*
HTML에 .js파일 포함된 구조 [HTML 열리면 JS 코드는 실행]
1. js함수호출
    함수1();
2. HTML에서 JS 함수 호출
    <마크업 이벤트속성="함수명(매개변수)"/>
        -이벤트속성 종류
          1. onclick 


*/
//1 매개변수x , 리턴x
function 함수1(){ console.log('함수1실행'); }
함수1( );


//2.
function 함수2( x,y ){console.log( x+y);}
함수2( 3, 5);

//3. 매개변수3개 ,리턴0
function 함수3(){ return 3+8; }
함수3()
console.log( 함수3() );
let result = 5 + 함수3();
console.log( result );


//4 매개변수x 리턴 0
function 함수4( x , y){ return x+y; }

//함수 안에 함수
function 함수5(){
    let result = 함수6(3);
    console.log( result );
}
function 함수6( x ) {return x*x}

// - 변수 위치에 따른 함수 내부에서 변수 호출.
    // - 매개변수를  이동한 * 서로 다른 함수간의 (지역)자료 전달.
    // - (전역) 자료 쓰면 모든 함수에서 사용가능
        // 특징: 프로그램이 종료될때까지. 그 자료는 사라지지 않는다.
    //(지역) 자료 쓰면 서로 다른 함수에서 사용 불가능
        //[ 매개변수 쓰면 가능]
        // 특징: 메모리 효율성이 좋다. 기능에 필요한 자료만 쓰고 기능이 끝나면 버린다ㅣ
        //[ 프로그램 전체적으로 사용하는 자료가 아니면 자료 버려야한다.]
const 전국지역 = 10;
function 경기도(){ 
    const 경기도 = 5;
    console.log(전국지역);
}
function 강원도(){ 
    const 강원지역 = 5;
    console.log(전국지역);
}
경기도( 전국지역 );