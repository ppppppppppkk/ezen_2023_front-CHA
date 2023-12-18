

       const boardArray = [  ] //함수 선언




       function 글쓰기(){ 
           const writer = document.querySelector('#writer').value;
           const password = document.querySelector('#password').value;
           const title = document.querySelector('#title').value;
           const content = document.querySelector('#content').value;
           
       
           const board = { 작성자 : writer , 비밀번호 : password , 제목 : title , 내용 : content };
           board.조회수 = 0; //객체내 없는key 호출할때 .. key 생성 //이제 등록했으니까 0부터 시작
           boardArray.push( board ); console.log( boardArray );
       
          document.querySelector('#writer').value=''
          document.querySelector('#password').value=''
          document.querySelector('#title').value =''
          document.querySelector('#content').value =''
        
          모든글출력()
           return;    
       
       }
       
       function 모든글출력(){ 
          
           const tableBody = document.querySelector('table>tbody'); console.log( tableBody );
           let html = ``;
           for( let i = 0 ; i<boardArray.length ; i++){
               console.log( boardArray[i] );
               
               html +=` <tr onclick="개별글출력( ${i} )" >
                           <th>${ i } </th> 
                           <th>${ boardArray[i].제목 }</th>
                           <th>${ boardArray[i].작성자 }</th>
                           <th>${ boardArray[i].조회수 }</th>
                        </tr>`
           }
           tableBody.innerHTML = html;
           return; 
       }
     
       function 개별글출력( index ){ 

        // 조회수 증가.
        boardArray[index].조회수 += 1 ; 모든글출력();
           console.log( index )
           const boardBox = document.querySelector('#boardBox');
           let html = `<div> 번호 : ${ boardArray[index].작성자 } 조회수: ${ boardArray[index].조회수 } </div>
                       <div> 제목 : ${ boardArray[index].제목 } </div>
                       <div> 작성자 : ${ boardArray[index].내용.replaceAll( '\n', '<br/>') } </div>
                       <input onclick="글수정( ${index} )" type="button" value="수정"/>
                       <input onclick="글삭제( ${index} )" type="button" value="삭제"/>
                       `;
           boardBox.innerHTML = html;
           return; 
       }
     
       function 글수정( index ){ 
           console.log( index )
       
      
            const checkPw = prompt('비밀번호');
            if( checkPw == boardArray[index].비밀번호 ) {
               const updateTitle = prompt('수정할제목');
               const updateContent = prompt('수정할 내용');
              boardArray[index].제목 = updateTitle;
              boardArray[index].내용 = updateContent;
            
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
     
       function 글삭제( index ){  
           console.log ( index )
           const checkPw = prompt('비밀번호');
           if( checkPw == boardArray[index].비밀번호 ){
               boardArray.splice( index, 1 );
               alert('삭제성공');
               모든글출력(); document.querySelector('#boardBox').innerHTML = ``;
           }else{
               alert('패스워드가 다릅니다. 삭제불가');
           }
           return; 
       }
       
       
       
       
       