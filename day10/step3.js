    //증강연산자
    // -복합대입연산자 간략하게 사용할려고,
    // 증감연산자는 1씩 증가 또는 1씩 감소 만 가능.[왜 ? 프로그래밍 색인/검사/패턴 = 엘리베이터 = 검색 ]



let value1 = 10;            // 1.정석/ 변수 호출하고 연산후 결과를 변수에 대입
    console.log( value1 ); //1증가

value1 += 1;                // 2. 1번 간략하게 하기위해 
    console.log( value1 );

value1 = value1 + 1;        // 3. 2번 간략하게 하기 위해
    console.log( value1 );

value1++;                   // 4. 2번 간략하게 하기 위해
    console.log( value1 );

++value1;                   // 5. 2번 간략하게 하기 위해    
    console.log( value1 );





let number1 = 10; number1++; console.log( number1 );    //후위  =   11
let number2 = 10; ++number2; console.log( number2 );    //선위  =   11

let number3 = 10; console.log( number3++ );             //후위  =   10
    console.log( number3 );                              //      =   11
let number4 = 10; console.log( ++number4 );             //후위  =   11



let result1 = number4++ +10 ; console.log ( result1 );  //      =   21
    console.log( result1 );                             //      =   21 result1 증가 x
    console.log( number4 );                             //      =   12


