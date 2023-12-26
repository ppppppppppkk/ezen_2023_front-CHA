
// 1. 익명함수
// const 함수명1 = function(){}
//2 선언적함수
//function 함수명2(){}


document.addEventListener('DOMContentLoaded', function(){
    const divA = document.querySelector('#first');
    const divB = document.querySelector('#second');
    const h1 = document.createElement('h1');
    h1.textContent = '이동하는 h1 태그';

    const toFirst = function(){
        divA.appendChild(h1);       //같은 dom객체를 여러번 appendChild()하면 이동
        setTimeout(toSecond, 10000)
    }

    const toSecond = function(){
        divB.appendChild(h1);
        setTimeout( toFirst,10000);
    }

    toFirst();



    let counter = 0;
    const h3 = document.querySelector('h3');
    h3.addEventListener('click',function(event){

   
    counter++;
    h3.textContent =`클릭 횟수 : ${counter}`;
    });

   


})


