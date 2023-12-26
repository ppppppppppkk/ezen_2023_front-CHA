
console.log(document.querySelector('img'));


document.addEventListener('DOMContentLoaded', function() {
    console.log( document.querySelector('img'));

    const rects = document.querySelectorAll('.rect');

    for( let i = 0; i<rects.length; i++){
        const width = (i + 1) * 100
        const src=`http://placekitten.com/${width}/250`;
        rects[i].setAttribute( 'src', src) ;
    }
    
    const divs = document.querySelectorAll('body>div'); //자식 선택자
    for(let i = 0; i<divs.length; i++){
        console.log(i , divs[i]);
        const val = i * 10;
        divs[i].style.height = '10px'
        divs[i].style.backgroundColor = `rgba(${val},${val},${val})`;
    }


    const header = document.createElement('h1'); //h1 요소 생성[생성]
    console.log( header )
        header.textContent = '문서객제 동적으로 생성하기'
        header.setAttribute('data-custom' , '사용자 정의 속성');
        header.style.color ='white';
        header.style.backgroundColor = 'black';

    document.body.appendChild( header ); //[위치 지정]
    






}) ;