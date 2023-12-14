// 전역자료[함수안에서 선언]
const 할일목록 = [ ]    //할일의 내용을 저장.
const 상태목록 = [ ]    //할일의 상태을 저장.
// 지역 자료[함수안에서 선언]



//1. 등록 함수 : 매개변수 , 리턴값
function 등록함수(){
    console.log('등록함수() 실행');

    const content = document.querySelector('#content').value; console.log( content );

    할일목록.push( content );
    상태목록.push( false ); //할일의상태를 입력받지 않고 초기값을 임의로 false
    console.log( 할일목록 ); console.log( 상태목록 );

    document.querySelector('#content').value = ``; alert('등록 성공');
    출력함수( )
}




//2. 변경 함수 : 매개변수=변경할인덱스 , 리턴값
function 변경함수( 변경할인덱스 ){
console.log('변경함수() 실행' + 변경할인덱스 );

상태목록[변경할인덱스] = 상태목록[변경할인덱스];
console.log( 상태목록 );

출력함수( )
}


//3. 삭제 함수  : 매개변수=삭제할인덱스 , 리턴값
function 삭제함수( 삭제할인덱스 ){
console.log('삭제함수() 실행' + 삭제할인덱스 );
할일목록.splice( 삭제할인덱스, 1);      //할일목록 도 1개 삭제
상태목록.splice( 삭제할인덱스, 1);      //상태목록 도 1개 삭제

출력함수( )
}


//4. 출력 함수 [ 등록후, 변경후, 삭제후 = 배열의 최신상태를HTML 대입]
function 출력함수(){

    const todoBottom = document.querySelector('#todoBottom');

    let html = ` `;

    for( let i = 0 ; i<할일목록.length ; i++){

   

    html += ` <div class="todo"> ${ 상태목록[i] ? 'success' : ''}">
    <div class="content"> ${ 할일목록[i] } </div>
    <div class="btnBox">
        <input onclick="변경함수(${ i })" type="button" value="변경"/>
        <input onclick="삭제함수(${ i })"type="button" value="삭제"/>
    </div> 
    </div>`
    }
    todoBottom.innerHTML = html;   




}