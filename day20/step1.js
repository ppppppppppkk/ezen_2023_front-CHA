/*

    객체 : 속성과 메소드를 가질 수 있는 모든 것
        형태
            객체 선언 : const object = { }
            객체내 속성추가 : object.새로운속성명 = 값;
            객체내 속성의 값 호출 : object.속성명
            객체내 속성의 값 변경 : object.기존속성명 = 값;
        -배열도 객체
        -함수도 객체

        -기본자료형(숫자, 문자열, 불) 객체 아니다.
            1. 기본자료형 ---> 객체로 변환 (객체 자료형, 래핑 클래스)
                - 왜? 객체로 활용하려고 ( 속성/메소드를 사용하니까.)
            2. 
                - new : 인스턴스(객체) 만들대 사용하는 키워드
                new Number( 숫자자료형 )
                new String( 문자자료형 )
                new Boolean( 불 자료형 )

*/



const a = [] // []대괄호 사용했으므로 배열

a.sample = 10; //객체.새로운속성명 = 값;    //객체에 속성추가

console.log( a.sample );
console.log( typeof a );     //typeof 상수/변수 ; 해당 상수/변수 저장된 자료의 타입 확인 
console.log( Array.isArray(a) ) // is ~~~ : 검토용 //Arrau.isArray(상수/변수) : 해당 상수/변수에 자료가 배열 자료형인지 확인

function b (){}
    b.sample = 10

console.log( b.sample );
console.log( typeof b ); // 함수는 객체의 특성을 완벽하게 가지고 있음 [js]

const c = 273
c.sample = 10;
console.log( c.sample ); //undefined 기본 자료형[객체가 아니므로]속성을 추가할수 없다

const d = '안녕' 
d.sample = 10;
console.log( d.sample ); //undefined 기본 자료형[객체가 아니므로]속성을 추가할수 없다

const e = true;
e.sample = 10;
console.log( e.sample );   //undefined 기본 자료형[객체가 아니므로]속성을 추가할수 없다


const f = new Number( 273 );
console.log( f );       // 273[x] {273}[o]
f.sapmple = 10;
console.log( f );       // Number{273, sample : 10}
console.log( f.valueOf() ); // 273 객체명.valueof(); 속성이 아닌 값 추출

const g = Number( 273 );
console.log( g );


console.log( '안녕하세요'.length );
console.log( '안녕하세요'.anchor('aaa') ); //문자열 기본자료형도. 온점 메소드 사용가능하다.
console.log( '안녕하세요'.bold('aaa') ); //


Number.prototype.sample = 10;
const i = 273
console.log( i.sapmple );

const j = 100;
console.log( i.sapmple);



Number.prototype.power = function ( n = 2)  {
    console.log( `n : ${n}`);
    console.log( ` this : ${ this.valueOf( )}` );
    return this.valueOf() ** n
}
const a2 = 12
console.log( a2.power() );
console.log( a2.power(3) );
console.log( a2.power(4) );



const h = '안뇽하세요'
console.log( h.indexOf('안뇽') );
console.log( h.indexOf('하세') );
console.log( h.indexOf('자바') );
// VS
//console.log( h.contain('안뇽') );

//JS가 편의성으로 제공하면 좋은데 없으니까 내가 만들자.
String.prototype.contain = function( data ){
    return this.indexOf( data ) >= 0; //0이상이면 true, 아니면 false
                                      // 인덱스가 존재하면 true 존재하지 않으면 false

};
console.log( h.contain('안뇽'));






