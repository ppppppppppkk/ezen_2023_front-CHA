
/*
설계
    1. 경혐
    2. 기능 실행 순서
    [키오스크 = 사용자입장]
        -카테고리 선택 -> 제품 선택 -> 장바구니 담기 -> 결제
    [포스기 = 관리자입장]
        -결제 내역 ( 주문 상태)
        - 카테고리 추가/삭제 기능
        - 제품 추가/삭제 기능
    3. 기능에 필요한 메모리(저장-DB설계)설계
        카테고리 = [ '신제품(NEW)' ,'프리미엄','와퍼&주니어','치킨&슈림프버거','올데이킹&킹모닝']
            - 관리자가 해당 배열을 추가/삭제
    
    4. 배열 안에 있는 데이터를 식별할때 기준점.
     사람 = { 이름 : '유재석', 나이 : 40세, 직업 : 강사 } - 이름으로 식별시 동명이인 존재하면 문제점 발생. [중복이 절대로 없어야함]
     사람 = { 주민등록번호 : '840420-1' 이름 : '유재석', 나이 : 40세 , 직업 : 강사}- 주민등록은 절대로 중복이 없다.

     - 인덱스 VS 식별코드 생성 VS 이름
*/


//=================================================================================
//배열 안에 객체 선언
let categoryArray = [ 
        { cno : 1 , cname : '신제품(new)'},
        { cno : 2 , cname : '프리미엄'},
        { cno : 3 , cname : '와퍼&주니어'},
        { cno : 4 , cname : '치킨&쉬림프버거'},
        { cno : 5 , cname : '올데이킹&킹모닝'},
]

let productArray = [
    { pno : 1, pname : '큐브스테이크 와퍼', pprice : 19000 , pimg : '큐브스테이크와퍼.png' , cno : 1},
    { pno : 2, pname : '더블비프불고기와퍼', pprice : 25000 , pimg : '더블비프불고기와퍼.png', cno : 3},
    { pno : 3, pname : '불양양 맥시멈3', pprice : 17000 , pimg : '불양양맥시멈.png' , cno : 5},

]
let cartArray = [ ]
//=======================================================================================
// -[함수1] : 카테고리 출력하는 함수( 실행조건 : JS 열렸을때 , 또는 )
printCategory(1); //함수 실행 최초로 실행시 선택카테고리 cno = 1 가정
function printCategory( selectCno ){ //함수선언. 매개변수 : 함수 안으로 들어온 변수.
    
    // 1. 어디에
    const categoryUl = document.querySelector('#header>ul');
    // 2. 무엇을
    let html = '';
        // 2-1 카테고리배열에 존재하는 카테고리객체들을 모두 li형식으로 변환해서
        for( let i = 0 ; i<categoryArray.length; i++){
            //만약에 i번째 카테고리의 cno와 내가 선택한 cno [매개변수]와 같으면
            // 만약에 클릭했을때. 클릭한 li의 카테고리번호를 매개변수[클릭한cno]로 전달
            html +=`<li onclick="printCategory(${ categoryArray[i].cno })" 
                class="${ categoryArray[i].cno == selectCno ? 'selectMenu' : '' }"> 
                ${ categoryArray[i].cname} 
                    </li>`
        }
    // 3. 카테고리출력
    categoryUl.innerHTML = html;
    // 4. 제품출력
    printProduct( selectCno ); // 카테고리에서 선택된 카테고리번호를 제품출력에 매개변수로 전달
    // 왜?? 제품출력시 모든제품 출력이 아니고, 선택된 카테고리번호의 일치한 제품만 출력해야되니까.
}

//=============================================================================================
//- [함수2] : 제품 출력하는 함수. ( 실행조건 : 카테고리출력 되었을때 )
function printProduct( selectCno ) {  //함수 선언 // 전체출력x //내가 선택한 카테고리(부)의 제품(자)만. 
    console.log( selectCno );

    // 1. 어디에
    const productBox = document.querySelector('#productBox'); //경로설정
    // 2. 무엇을
    let html ='';
        // 자식요소에서 내가 선택한 카테고리번호 와 일치한 제품을 찾아서div화
        for( let i = 0 ; i<productArray.length ; i++){ //중첩문 let i는 0부터 위에 선언한 productArray부터 마지막5까지 증감연산자를 쓴다
          
            if(productArray[i].cno == selectCno){ // 만약에 제품목록의 i번째 

                html +=` <div onclick="setCart(${productArray[i].pno})" class="product"> 
                <img src="img/${productArray[i].pimg}" />
                <div class="pinfo">
                    <div class="pname"> ${productArray[i].pname}</div>
                    <div class="pprice"> ${productArray[i].pprice.toLocaleString() }원</div>
                </div>
             </div>`
                // 
            }

        }
    // 3. 출력
    productBox.innerHTML = html;
}
//===================================================================================

// [함수3] 제품선택시 장바구니에 담아주는 함수.(실행조건 : 제품을 클릭했을때.)
function setCart( selectpno){ //함수 선언
console.log("setCart()" + selectpno );
 cartArray.push( selectpno );
printCart();

    //1. 어디에
   
}

//============================================================================================

//[함수4] 카트에서 x버튼을 클릭시 카트에서 삭제 (실행조건 : x버튼을 클릭했을떄.)
function cartDelete( deleteIndex ){
    //1. 입력--> 매개변수로 선택된 삭제인덱스.
    //2. 처리 --> 배열에서 해당 인덱스 삭제
    cartArray.splice(deleteIndex , 1);
    //3. 출력
    printCart();
}
//=============================================================================================
//[함수5]
function printCart(){
    const cartBottom = document.querySelector('#cartBottom');
    //2. 무엇을
    let html = ''
        let totalPrice = 0; // 카트내 제품의 총 금액
        let cartCount = cartArray.length; //카트내 pno 개수.
        // 카트목록에 존재하는 제품의 정보찾기. [배열에 있는 모든 요소를 하나씩 출력]    
        for( let i = 0 ; i<cartArray.length ; i++){
          
            for( let j = 0 ; j<productArray.length ; j++){
                if( cartArray[i] == productArray[j].pno){
                    // - html div 누적
                    html +=`  <div class="citem">
                    <div>${productArray[j].pname} </div>
                    <div>${productArray[j].pprice.toLocaleString() }원 </div>
                    <span onclick="cartDelete( ${i} )"> X </span>
                </div>`
                // 총합계 누적
                totalPrice += productArray[j].pprice; // j번쨰의 제품 가격을 총합계에 더하기.           
                } //if end
            } // fend
        } //fend
      
    //3. HTML 출력
    cartBottom.innerHTML = html;
    // 3. 개수, 총가격
    document.querySelector('#count').innerHTML = cartCount;
    document.querySelector('#total').innerHTML = totalPrice.toLocaleString()+"원";

}




//======================================================================================

let codeNumber = [
    { }
]

let bottomcategory = [
    { jno: 1, jname : '주문번호'},
    { jno: 2, jname : '주문날짜'},
    { jno: 3, jname : '주문상태'},
    { jno: 4, jname : '제품명'},

]

let bottommenu = [
    { }
]









