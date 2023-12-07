console.log("자바스크립트싱핼");

console.log('5+3*2');
console.log( (5+3)*2);
console.log( 10 % 2);

console.log( 10 % 3);
console.log( 10 % 4);

console.log( 10 / 2);
console.log( 10 / 3);

console.log( 5-3*2);

console.log( parseInt( 10 / 3) ); //정수로 변환해주는 함수 = 소수점 버리기

// 불 자료형
console.log(true);
console.log(false);
console.log( 52 > 273); //52가 273 보다 크다
console.log( 52 < 273); //52가 273 보다 작다
console.log( 10 == 10); console.log(10 == 10);//true,ture
console.log( 10 === "10"); console.log( 10 == "10");//false,true
console.log("가방" > "하마"); //false
    //오름차순 : 0 1 2 3 4 ~~, a b c d ~~ , ㄱ ㄴ ㄷ ㄹ ~~

console.log( 52 >= 273); // 크거나같다  false
console.log( 52 <= 273); // 작거나같다  true
console.log( 10 != 11); //10과 11은 다르다. true

console.log( !true)     // true -> false
console.log( !false)    // false -> true

console.log( true && true);         //true 그리고 true => true
console.log( true && false);        //true 그리고 false => false
console.log( false && true);        //false 그리고 true => false
console.log( false && false);       //false 그리고 false => false

console.log( true || true);         //true 그리고 true => true
console.log( true || false);        //true 그리고 false => ture
console.log( false || true);        //false 그리고 false => true
console.log( false || false);       //true 그리고 false => false


// 자료형검사 ( 현재 자료가 숫자인가? 문자열인가? 불인가? 확인작업)
    //왜? 유효성검사 [ 데이터가 확인? -- 자료형 마다 다른 로직/기능직업]
console.log( typeof('문자열')); //'문자열'의 자료형 확인 string[문자열]
console.log( typeof(273));      //true의 자료형 확인  number[숫자]
console.log( typeof(true));     //true의 자료형 확인  booleanp[불]

console.log( typeof'안녕');
console.log( typeof 50); console.log(typeof (50-30));
console.log( typeof false); console.log(typeof (50 < 30));

// 템플릿 문자열 (서로 다른 자료형들을 존재할때는 + 연결연산자)
console.log( '표현식 273 + 52 의 값은 ' + (273+52) + '입니다');
            //연결연산자를 이용하면 되지만... 너무 많으면 복잡해진다.
console.log( `표현식 273 +52 의 값은 ${273+52} 입니다`);
            // `백틱 ( 탭[tab]위에 `)
            // 1. `` 으로 전체를 감싼다.
            // 2. 데이터를 출력할 위치에 ${데이터}

console.log(1 == "1");      // 데이ㅓ터만 비교 했을대는 같다. [자료형 비교 x]
console.log( false == 0); //false는 0과 같다. true 는 1 [ 2진수 -> 0,1 -> false,true]
console.log(""== []);       //빈문자열 과 빈배열과 같은 의미
console.log( 0 == []);      // 0과 빈배열과 같은 값 의미

//1, 불, 숫자, 숫자, 불

console.log(2 + 2 - 2 * 2 / 2 * 2);
console.log(2 - 2 + 2 / 2 * 2 + 2);