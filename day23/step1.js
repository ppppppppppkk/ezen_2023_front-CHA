//키보드 이벤트 

// 1.HTML의 내용이 모두 로드 되었을떄.
document.addEventListener('DOMContentLoaded', function(){
    
    // 2. 특정 html 요소를 객체로 호출
    const textarea = document.querySelector('textarea');
    const h1 = document.querySelector('h1');
    
    // 3. textarea 요소의 이벤트 등록
    textarea.addEventListener( 'keyup', function( e ){
        // *event : 매개변수로 이벤트의 정보를 받습니다
    console.log( e );
    console.log( e.code );
    console.log( e.keyCode );
    console.log( e.altKey);
    console.log( e.ctrlKey);
    console.log( e.shiftKey);
        // 4. 글자 수
        const length = textarea.value.length;
        // 5. 대입
        h1.textContent = `글자 수 :${length}`;

        } );


        // 1. 별 기본 설정
        const star = document.querySelector('h2');
        star.style.position = 'absolute';

        let x = 0;
        let y = 0;
        const block = 20
        
        // 2. 별 위치를 그려주는 함수 

       const print = function(){
        star.style.left = `${ x*block }px`
        star.style.top = `${ y*block }px`
       }
       print();


        // 3. 별 위치를 이동하는 이벤트
        const left = 37;
        const up = 38;
        const right = 39;
        const down = 40;
        
        document.body.addEventListener('keydown',function(e){
            console.log(e)
            if( e.keyCode == left){ x--;} //왼쪽방향키를 눌렀을때. x 1감소
            else if(e.keyCode == up ){ y--;}    // 위 방향키를 눌렀을때. y 1감서
            else if(e.keyCode == right){ x++;}  // 오른쪽 방향키를 눌렀을때 x 1증가
            else if(e.keyCode == down){ y++; }  // 아래 방향키를 눌렀을때 y 1증가
            else{ }

            print();
        })


});