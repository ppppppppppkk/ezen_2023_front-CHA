
/* 연산자 연습문제  */

// -문제1 : prompt 함수 로 국어 , 영어 , 수학 점수를 입력받아 각 변수에 저장하고 총점 출력 , 평균 출력
    // 1. 세 과목에 점수를 각 입력받고 변수에 저장 
/*
let 국어 = Number( prompt('국어 점수 : ') );
let 영어 = Number( prompt('영어 점수 : ') );
let 수학 = Number( prompt('수학 점수 : ') );
    // 2. 세 과목 총점 계산 
let 총점 = 국어+영어+수학;
    // 3. 평균 계산   = 합계/개수 
let 평균 = 총점 / 3;
    console.log(`총점 ${총점}점 / 평균 ${평균}점`);
*/

// -문제2 : prompt 함수 로 반지름 입력받아서 원넓이 [ 계산식 :  반지름*반지름*3.14 ] 출력
/*
let 반지름 = Number( prompt('반지름 : ') );     console.log( `원넓이 : ${ 반지름*반지름*3.14 } ` ); 
*/

// -문제3 : prompt 함수 로 두 실수를 입력받아서 앞실수의 값이 뒤실수의 값의 몇%인지 출력 [예) 54.5   84.3 두 실수 입력시	결과 : 64% ]
/*
let 실수1 = Number( prompt('실수1 : ') );       let 실수2 = Number( prompt('실수2 : ') );
let 백분율 = ( 실수1/실수2 ) * 100 ;
console.log( `두 실수의 백분율 : ${ parseInt( 백분율 ) }%` );
*/

// -문제4 : prompt 함수 로 정수를 입력받아 홀수[true] / 짝수[false] 여부 출력
    // 홀수/짝수 식 : 어떤 값 에 나누기 2를 했을때.. 나머지가 0 이면 짝수 , 나머지가 1 이면 홀수 
    // 홀수 : 값 % 2 == 1       ,    짝수 : 값 % 2 == 0     
/* let 정수 = Number( prompt('정수 입력 : ') );  console.log( `입력한 ${정수} 는 : ${ 정수%2 == 0 ? '짝수' : '홀수'  } `); */

// -문제5 : prompt 함수 로 정수를 입력받아 7배수이면 true / 아니면 false 출력
    // 배수 찾기  : 어떤 값 에 나누기 수 를 했을때.. 나머지가 0 이면 수는 그 값의 배수 ( 나머지가 없으면 )
    // 배수 : 값 % 배수 == 0 
/* let 정수 = Number( prompt('정수 입력 : ' ) ); console.log(  정수 % 7 == 0 ); */

// -문제6 : prompt 함수 로 십만원 단위의 금액을 입력받아 지폐 개수 세기[연산자 사용] 입력예) 356789  , 출력 예) 십만원:3장 만원:5장 천원:6장
    // 1. 금액 자릿수[인덱스] 이용 방법 
/*
let 금액1 = prompt('십만원 단위의 금액 입력 : ');   
console.log( `십만원:${금액1[0]}장 , 만원 : ${금액1[1]}장 , 천원 : ${금액1[2]}장` );
*/
    // 2. 연산 
/*
let 금액2=  Number( prompt('십만원 단위의 금액 입력 : ') ) ;
let 십만원권 = parseInt( 금액2/100000 ); // 십만원 단위  : parseInt(금액/100000)
금액2 -= (십만원권*100000);  // 금액(원금)에 십만원권 제외한 금액에서 만원권 계산 
let 만원권 = parseInt(금액2/10000);     // 만원 단위 : parseInt(금액/10000)
금액2 -= (만원권*10000);    // 금액(원금)에 만원권 제외한 금액에서 천원권 계산 
let 천원권 = parseInt(금액2/1000);      // 천원 단위 : parseInt(금액/1000)

console.log( `십만원:${ 십만원권 }장 , 만원 : ${ 만원권 }장 , 천원 : ${ 천원권 }장` );
*/
// -문제7 : prompt 함수 로 아이디와 비밀번호를 입력받아 아이디가 admin 이고 비밀번호가 1234 와 일치하면 [ 결과 예) : true 출력 아니면 false 출력 ]
    //- 이고,이면서,면서,모두,그리고 등등 == and 조건 == &&
/*    
let 아이디 = prompt('아이디 입력 : ')
let 비밀번호 =  prompt('비밀번호 입력 : ')
console.log( `로그인 결과 : ${ 아이디 == 'admin' && 비밀번호 == 1234 } `);  // O
console.log( `로그인 결과 : ${ 아이디 === 'admin' && 비밀번호 === 1234 } `); // X
*/

// -문제8 : prompt 함수로 정수를 입력받아 홀수 이면서 7배수이면 true 아니면 false 출력
    // - 홀[ 나누기 2 했을대 나머지가 1이면 ] / 배수[ 나누기 배수 했을때 나머지가 0 이면 ]
/*
let 정수 = Number( prompt('정수') ) ;
console.log( `홀수 이면서 7배수인지? ${ 정수%2 == 1 && 정수%7 == 0  } `)
                                      // 삼항연산자 [  T또는F ? T대체코드 : F대체코드 ] 
*/
// -문제9 : 정수 2개를 입력받아 더 큰수 를 출력
/*
let 정수1 = Number( prompt('정수1') );
let 정수2 = Number( prompt('정수2') );
console.log( 정수1 > 정수2 ? 정수1 : 정수2 );
console.log( 정수1 > 정수2 ? 정수1 : 정수1 < 정수2 ? 정수2 : '두수는 같다.' );
*/
    // 삼항연산자           조건 ? 참 : 거짓 
                    // 성별이 m이면 '남자' 아니면 '여자' 
                    //  성별 == 'm' ? '남자' : '여자' 

    // 삼항연산자 2중첩     조건1 ? 참1 : 조건2 ? 참2 : 거짓 
                    // 나이가 50세이상이면 '중년' 20세이상이면 '청년' 그외 '청소년'
                    // 나이 >=60 ? '중년' : 나이>=20 ? '청년' : '청소년'
                    // 나이 >=20 ? '청년' : 나이>=60 ? '중년' : '청소년'

    // 삼항연산자 3중첩     조건1 ? 참1 : 조건2 ? 참2 : 조건3 ? 참3 : 거짓 
                    // 점수가 90점이상이면 'A등급' 80점이상이면 'B등급' 70점이상이면 'C등급' 그외 탈락
                    // 점수 >= 90 ? 'A등급' : 점수>=80 ? 'B등급' : 점수>=70 ? 'C등급' : 탈락

    // 중첩 많아지면 관리[가독성 떨어짐/선언부]가 힘들어 ===> 조건문 IF

// -문제10 : 정수 3개를 입력받아 가장 큰수 를 출력 
/*
let 정수1 = Number( prompt('정수1') );
let 정수2 = Number( prompt('정수2') );
let 정수3 = Number( prompt('정수3') );
    // - 임의 변수[저장/기억] 활용 [ 가장 큰수를 기억하는 방법. ]
let max = 정수1;                        // 1. 가장 큰수를 가지는 변수를  선언해서 첫번째 수 를 넣어둔다.
max = max < 정수2 ? 정수2 : max;        // 2. 두번째 수가 max 보다 크면 max에 두번째 수를 대입 
max = max < 정수3 ? 정수3 : max;        // 3. 세번째 수가 max 보다 크면 max에 세번째 수를 대입 
console.log( `가장 큰수는 : ${ max } ` );
*/

// -문제11 : 정수 3개를 입력받아 오름차순 으로 출력    [ 7 5 9 -> 5 7 9 ]
let 정수1 = Number( prompt('정수1') );
let 정수2 = Number( prompt('정수2') );
let 정수3 = Number( prompt('정수3') );

// - 자릿수 각 비교 해서 스왑하는 방법      [ 추후에 제어문/반복문 이용한 효율적인 방법 ]
    // 1. 첫번째 자리 비교 [ 비교 2번 ]
    let temp = 정수1 > 정수2 ? 정수2 : 정수1;           // 정수2 -> temp 
    정수2 = 정수1 > 정수2 ? 정수1 : 정수2;              // 정수1 -> 정수2 
    정수1 = 정수1 > 정수2 ? temp : 정수2;              // temp -> 정수1

    temp = 정수1 > 정수3 ? 정수3 : 정수1;             
    정수3 = 정수1 > 정수3 ? 정수1 : 정수3;              
    정수1 = 정수1 > 정수3 ? temp : 정수1;              

    // 2. 두번째 자리 비교 [ 비교 1번 ]
    temp = 정수2 > 정수3 ? 정수3 : 정수2;
    정수3 = 정수2 > 정수3 ? 정수2 : 정수3;
    정수2 = 정수2 > 정수3 ? temp : 정수2;
    // 3. 세번째 자리 비교 X [ 비교 0번 ]

    // 4. 결과출력 
    console.log( `${정수1} , ${정수2} , ${정수3}`)

    /* 
        - 오름차순 하는 방법 [ 정렬 ]
            7   5   9 
            a   b   c 

            1. a 와 b 를 비교    a > b      a가 더 크면. 자리 바꾸기[스왑]
            --- 모든 자리수 마다 비교..
            a자리는 b , c 와 비교 
            b자리는 c와 비교     [ a자리와 비교를 안하는이유: 비교 당했으니까.]
            c자리는 X           [ b,c자리와 비교를 안하는이유: 비교 당했으니까. ]

        - 변수 와 변수의 값 바꾸는 방법[스왑]
            a 와 b를 스왑 
            [ 문제점 : a의 값은 사라짐.. 왜?? 변수는 1개밖에 저장을 못하니까. ]
            - 주면서 받기 불가능.. 컴퓨터 동시에 불가능.
    
            - 스왑 하는 방법 [ 임의 변수 활용 ]
            1. temp 임의[임시저장소] 생성.
            2. temp에 a 를 대입 
            3. a에 b를 대입 
            4. b에 temp를 대입
            
            a <------ 직거래X ----->  b
            7[*3=5]                   5[*4=7]

                    temp[임시] [*2=7]
    */



/*
   문제12 : [ 가위바위보 게임 ] 
   - 가위가 '0' 이고 바위가 '1' 이고 보가 '2' 일때 플레이어1와 플레이어2 가 있습니다. 
   - 승리자 판단과 무승부 경우의수를 출력하시오.
   [입력]
      플레이어1가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
      플레이어2가 0 혹은 1 혹은 2 입력받아 변수에 저장합니다.
   [경우의수 판단]
      플레이어1 이겼을때 경우의수 ' 플레이어1 승리 ' 출력
      플레이어2 이겼을때 경우의수 ' 플레이어2 승리 ' 출력
      비겼을경우 '무승부' 출력
*/
let player1 = Number(prompt('플레이어1'))
let player2 = Number(prompt('플레이어2'))
let answer = player1==player2 ? 
                    '무승부' :  player1==(player2+1)%3 ? 
                                '플레이어1 승리' :  '플레이어2 승리';
/*
    플레이어1 이기는 경우의수 
        플레이어1 == 0 일때  플레이어2 == 2
        플레이어1 == 1 일때  플레이어2 == 0
        플레이어1 == 2 일때  플레이어2 == 1

        ( 플레이어1 == 0 && 플레이어2 == 2 ) || 
        ( 플레이어1 == 1 && 플레이어2 == 0 ) ||
        ( 플레이어1 == 2 && 플레이어2 == 1 )

                            플레이어2 == 2+1 = 3  => 3%3 == 0
                            플레이어2 == 0+1 = 1  => 1%3 == 1
                            플레이어2 == 1+1 = 2  => 2%3 == 2
        
        player1==(player2+1)%3 

    그외 졌다.
        
*/



// p. p.144
/*
    확인문제1 : 1
    확인문제2 : 2
    확인문제3 : 
        3-1 : 2번째 줄에서 초기화 가 없다.
        3-2 : 오류 없다.
    확인문제4 : 상수라서 증감이 불가능.
        - 만약에 변수 였다면..
        let number = 10
        11 선위증가 11
        11 후위증가 11
        13 12 -> 선위증가 13
        13 후위증가 13
 

*/