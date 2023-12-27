// 1. HTML  요소에서 onclick ="함수()" : 인라인 이벤트 모델
// 2. addEventListener('click', 함수() ) : 표준 이벤트 모델

document.addEventListener('DOMContentLoaded',function(){

    // 1. 각 요소 가져오기
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const p = document.querySelector('p');

    // 2. 요소의 이벤트 등록
    button.addEventListener('click' ,function(){
        // 3. 입력받은 값 호출 해서 숫자로 변환
        const inch = Number( input.value );
        // 4. 유효성검사
        if(isNaN(inch)){
            p.textContent = `숫자를 입력해주세요`;
            return; //함수 종료[아래코드는 실행되지 않는다.]
        }

        // 5. inch를 cm 변환
        const cm = inch * 2.54;
        p.textContent = `${cm}cm`
    }); //e end


    //===========================이메일 형식 확인하기==============================
    // 1. 각 요소 가져오기
    const email = document.querySelector('#email');
    const emailConfirm = document.querySelector('#emailConfirm');
    // 2. 이메일 유효성 검사 함수 선언[ 실행 조건 : input에서 keyup할때마다]
    const isEmail = function( value ){
        return value.indexOf('@') > 1 && value.split('@')[1].indexOf('.') > 1
    }
      // 3. 요소의 이벤트 [input[email] keyup 할때마다] 등록
      email.addEventListener('keyup', function(event){
        console.log( event );
        console.log( event.currentTarget);

        const value = event.currentTarget.value;
        if( isEmail(value ) ){ // 2번주석의 함수 호출
            emailConfirm.style.color ='green';
            emailConfirm.textContent = `이메일 형식입니다. : ${value}`
        
        } else{
            emailConfirm.style.color = 'red';
            emailConfirm.textContent = `이메일 형식이 아닙니다. : ${value}`
        }

    })
   
        // value.indexOf('@') > 1 : 만약에 매개변수에 @가 포함되어 있으면
        // && 이면서
        // value.split('@')[i].indexOf('.') > 1 : 만약에 매개변수를 @기준으로 분리후 뒷자리에 .(온점)포함되어 있으면

    

   
});