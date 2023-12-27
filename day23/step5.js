

document.addEventListener('DOMContentLoaded',function(){ // 문서 객체를 가져옵니다 괄호 대신 익명함수

    const input = document.querySelector('#todo');
    const todoList = document.querySelector('#todo-list');
    const addButton = document.querySelector('#add-button');
    //식별자 역할

    // 변수를 선언
    let keyCount = 0                            //keyCount는 0

    //함수를  선언
    const addTodo = function(){                 //  =>{} 대신 function익명함수 선언
        if(input.value.trim() === ''){          //trim = 공백을 제거하는 함수
            alert('할 일을 입력해주세요.')        // 윈도우 창 표시
            return; //함수종료
        }

    //문서 객체를 설정합니다
    const item = document.createElement('div');         // HTML에 동적으로 요소 추가 
    const checkbox = document.createElement('input');    // HTML에 동적으로 요소 추가
    const text = document.createElement('span');         // HTML에 동적으로 요소 추가
    const button = document.createElement('button');      // HTML에 동적으로 요소 추가

    //문서 객체를 식별할 키를 생성합니다
    const key = keyCount                                   //key는 keyCount다
    keyCount += 1                                          // 

    //item 객체를 조작하고 추가합니다.
    item.setAttribute('data-key', key);
    item.appendChild(checkbox);                             //appenChild 부모노드에 자식노드를 추가하는 메서드
    item.appendChild(text);                                //appenChild 부모노드에 자식노드를 추가하는 메서드
    item.appendChild(button);                               //appenChild 부모노드에 자식노드를 추가하는 메서드
    todoList.appendChild(item);                            //appenChild 부모노드에 자식노드를 추가하는 메서드

    //checkbox 객체를 조작합니다.
    checkbox.type = 'checkbox'  //<input type=:"checkbox"> 형태를 구성합니다.
    checkbox.addEventListener('change', function(event) {       //
        item.style.textDecoration                               // 체크박스를 클릭하면 선을 그어줍니다.
        = event.target.checked ? 'line-through' : ''
    })

    //text 객체를 조작합니다
    text.textContent = input.value;                             

    //button 객체를 조작합니다
    button.textContent = '제거하기';                            //button 형태를 구성합니다
    button.addEventListener('click',function(){                
        removeTodo(key)
    })

    //입력 양식의 내용을 비웁니다.
    input.value =''
    }

    const removeTodo = function(key) {
        const item = document.querySelector(`[data-key="${key}"]`)
        todoList.removeChild(item)
    }

    //이벤트 연결
    addButton.addEventListener('click',addTodo)
    input.addEventListener('keyup', function(event) {
        const ENTER = 13
        if(event.keyCode === ENTER){
            addTodo()
        }
    })
})