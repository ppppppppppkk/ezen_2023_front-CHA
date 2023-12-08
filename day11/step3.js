
// 변수/상수 : 자료를 저장해서 호출을 여러번 기능[재활용]
// 함수      : 코드를 저장해서 호출을 여러번 가능[재활용]


/* if문 연습 문제 

/prompt 대신에 value 으로 입력받기
/풀이 결과를 console.log 대신에 span에 출력



//문제1 : 3개 정수를 각 input으로 입력받아 총점과 평균 span에 출력하시오.

*/

function 연습버튼클릭했을때실행되는코드모음상자(){
    //input에 입력받은 값 가져오기 

    let value1 = document.querySelector('#input1').value;
    let value2 = document.querySelector('#input2').value;
    let value3 = document.querySelector('#input3').value;

    let sumValue = Number(value1)+Number(value2)+Number(value3);
    let avgValue = sumValue/3;

    document.querySelector('#result').innerHTML 
    = `총점 : ${sumValue}점 평균:${avgValue} 점`;
}

//문제2 : 2개 정수를 입력받아 더 큰 수를 출력
// =================================================================================

function 문제2함수(){
    alert('문제2함수 실행');

    let value1 = Number(document.querySelector('#input1').value);
    let value2 = Number(document.querySelector('#input2').value);

    let result ="";

    if( value1 > value2 ){ result = value1+"가 큽니다.";}

    else if ( value1 < value2) {result = value2+"가 큽니다.";}
    else{result ="두수는 같다." }
   
    document.querySelector('#result'). innerHTML
            = `${ result }`
}
// =================================================================================
//문제 3 : 3개의 정수[입력값1/2/3] 를 입력받아서 가장 큰수를 출력 

function 문제3함수(){
   

    let value1 = Number(document.querySelector('#input1').value); console.log(value1);
    let value2 = Number(document.querySelector('#input2').value); console.log(value2);
    let value3 = Number(document.querySelector('#input3').value); console.log(value3);
    

    let max = value1;  // 첫번째 값을 가장 크다고 가정
    // 만약에 max의 값보다 value2의 값이 더 크면 max에 value2 값을 대입/수정
    if(max < value2 ){ max = value2; }
    if(max < value3 ){ max = value3; }


    document.querySelector('#result'). innerHTML = `${ result }`;
}


// ==============================================================================
//문제 4 : 1개의 점수[입력값1] 를 입력받아 점수 90점이상 합격 출력 아니면 탈락 출력
     function 문제4함수(){ //fstart
    //입력
    let value1 = Number(document.querySelector('#input1').value); console.log(value1);
    //처리
    let result = '';
    if( value1 >= 90 ){result ='합격'; }
    else{result = '불합격'; }
   
    
    //결과
    document.querySelector(`#result`).innerHTML = `${result}`;
}   //fend




// ============================================================================
/*문제 5 : 점수[입력값1]를 입력받아 점수 90점이상 A등급 출력 
                            80점이상 B등급 출력 
                            70점이상 C등급 출력  
                            그외 재시험
*/

function 문제5함수(){ //fstart
    //입력
    let value1 = Number(document.querySelector('#input1').value); console.log(value1);
    //처리
    let result = '';
   if(value1 >= 90){result = "A등급";}
   else if( value1 >= 80){result = "B등급";}
   else if( value1 >= 70){result = "C등급";}
   else{result = "재시험";}
   
   
    
    //결과
    document.querySelector(`#result`).innerHTML = `${result}`;
}   //fend



// ========================================================================================
/*문제 6: 아이디[입력값1] 와 비밀번호[입력값2] 입력받기 
                   회원아이디가 admin 이고 비밀번호가 1234 이면 로그인 성공 출력 아니면 로그인실패 출력



*/

// ==========================================================================================
//문제 7 : 3개의 정수[입력값1/2/3] 를 입력받아서 오름차순 / 내림차순 출력 