//배열 안에 객체를 넣어준다
let categoryArray = [ //변수 카테고리어레이 는 대괄호
    { cdo : 1, cname : '추천메뉴' }, // 중괄호 는 1 이름은 '추천메뉴' 중괄호 닫고 콤마
    { cdo : 2, cname : '커피(HOT)'}, // 중괄호 는 2 라는 이름을 '커피(HOT)' 중괄호 닫고 콤마
    { cdo : 3, cname : '커피(ICE)'}, // 중괄호 는 3 라는 이름을 '커피(ICE)' 중괄호 닫고 콤마
    { cdo : 4, cname : '주스'} // 중괄호 는 4 콤마 이름은 '주스'라고 하고 중괄호 닫고
] // 대괄호 닫고

let productArray = [  //변수 안에 productArray는 대괄호 열고
    { pno : 1 , pname: '딸기주스' , pprice :'4000', pimg : '딸기주스.png' , cdo : 1 },// 중괄호를 열고 일단 '딸기주스' 를 pno : 1이라고 코르들 만들어준다.
    { pno : 2 , pname: '레드오렌지자몽주스', pprice :'4500', pimg : '레드오렌지자몽주스.png' ,cdo : 1},
    { pno : 3 , pname: '샤인머스켓그린주스', pprice : '5000', pimg : '샤인머스켓그린주스.png',cod : 4}
]

//===========================================================
printscategory(1) //함수 실행
function printscategory( selectCdo ){ //함수 선언 .매개변수 함수 안으로 들어온 변수
    
    const categoryUl = document.querySelector('#header > ul') // 상수 categoryUl 은 html에 소괄호 열고 header 안에 ul 이라는 곳에 설정한다.
    let html = '' ; // 무엇을
    for( let i = 0 ; i<productArray.length ; i++){ // for문 중첩문 i는 0부터 productArray 라는  length 에 증감연산자 ++ 를 설정해준다 중괄호 열고
        
        
        //1. html li 안에 onclick를 버튼을 클릭하면 printCategory 함수를 실행해주고 categoryArray i번째에서 cdo를 찾는다
        //2. 클래스 는 큰따옴표 달러 중괄호 열고 categoryArray[i].cdo 같으면== selectCdo    
        html +=`<li onclick="printCategory(${ categoryArray[i].cdo })"
        class="${ categoryArray[i].cdo == selectCdo ? 'selectMenu' : '' }">  
        ${ categoryArray[i].cname} 
            </li>`
    }
// 카테고리 출력
categoryUl.innerHTML = html; //카테고리Ul안 HTML에 위에 무엇을 을 가지고온다.
}