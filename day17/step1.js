// 속성[상태] 마다 배열을 하나씪 만들면 배열에 너무 많아져. 관리힘들어
// 객체지형 나오기전... 여러속성들을 하나의 배열에서 관리하고 싶다.
    //1. = [] 
       //하나의 서로다른 유형의 4가지의 데이터 저장하면 인덱스 관리 힘들다.
    //2. boardArray = [ "작성자/비밀번호/제목/내용" , "작성자/비밀번호/제목/내용" , "작성자/비밀번호/제목/내용"]
       // - 여러 유형의 4가지의 데이터를 하나의 문자열로 묶음 *단 구분이 있어야함 [ 구분 문자는 개발자 마음.]
       // - 입력 데이터에는 구분 문자가 포함되면 안된다.

const boardArray = [] //함수 선언




//1. [C]글쓰기 [ 글쓰기 버튼을 클릭했을때.]
function 글쓰기(){ //매개변수 : x 리턴값 : x
    const writer = document.querySelector('#writer').value;
    const password = document.querySelector('#password').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    
    
    const board = `${writer}/${password}/${title}/${content}`; console.log( board );
    boardArray.push( board ); console.log( boardArray );

   document.querySelector('#writer').value=''
   document.querySelector('#password').value=''
   document.querySelector('#title').value =''
   document.querySelector('#content').value =''
 
   모든글출력()
    return;    

}
//2-1. [R]모든글출력 [1.js가 열렸을때 2.글쓰기/글수정/글삭제 를 처리 할때마다.]
function 모든글출력(){ //매개변수 : x 리턴값 : x
   
    const tableBody = document.querySelector('table>tbody'); console.log( tableBody );
    let html = ``;
    for( let i = 0 ; i<boardArray.length ; i++){
        console.log( boardArray[i] );
        // 저장할때 4가지 속성
        html +=` <tr onclick="개별글출력( ${i} )" >
                    <th>${ i } </th> 
                    <th>${ boardArray[i].split("/")[2] }</th>
                    <th>${ boardArray[i].split("/")[0] }</th>
                 </tr>`
    }
    tableBody.innerHTML = html;
    return; 
}
//2-2 [R]개별글출력 [ 해당 글을 선택했을때. ]
function 개별글출력( index ){ //매개변수 :  해당 글의 식별번호 보고자하는 번호 // 리턴값 : x
    console.log( index )
    const boardBox = document.querySelector('#boardBox');
    let html = `<div> 번호 : ${ boardArray[index].split("/")[0] } </div>
                <div> 제목 : ${ boardArray[index].split("/")[2] } </div>
                <div> 작성자 : ${ boardArray[index].split("/")[3].replaceAll( '\n', '<br/>') } </div>
                <input onclick="글수정( ${index} )" type="button" value="수정"/>
                <input onclick="글삭제( ${index} )" type="button" value="삭제"/>
                `;
    boardBox.innerHTML = html;
    return; 
}
//3. [U]글수정 [ 글수정 버튼을 클릭했을때.]
function 글수정( index ){ //매개변수 : (대상)수정할 식별번호 리턴값 : X
    console.log( index )

    // 1. 검증 [유호성검사]
     const checkPw = prompt('비밀번호');
     if( checkPw == boardArray[index].split("/")[1]) {
        const updateTitle = prompt('수정할제목');
        const updateContent = prompt('수정할 내용');
        boardArray[index] = `${ boardArray[index].split('/')[0] }/ ${ boardArray[index].split('/')[1] }/   ${updateTitle}/ ${updateContent} `
        console.log( boardArray[index]);
        alert('수정 성공');
        //새로고침
        모든글출력();
        개별글출력(index);
     }else{
        alert('패스워드가 다릅니다. 수정불가.')
     }
     return; 
}
//4. [D]글삭제 [ 글삭제 버튼을 클릭했을때.]
function 글삭제( index ){  //매개변수 : (대상)삭제할 식별번호 리턴값 : X
    console.log ( index )
    const checkPw = prompt('비밀번호');
    if( checkPw == boardArray[index].split("/")[1] ){
        boardArray.splice( index, 1 );
        alert('삭제성공');
        모든글출력(); document.querySelector('#boardBox').innerHTML = ``;
    }else{
        alert('패스워드가 다릅니다. 삭제불가');
    }
    return; 
}

/*
    함수 만들때 고민할점
        1. 언제 실행하는 함수인지?
        2. 함수 안으로 넣을 매개변수?
        3. 함수 밖으로 반환할 값?
        4. 무엇을 실행 하는지?
*/


