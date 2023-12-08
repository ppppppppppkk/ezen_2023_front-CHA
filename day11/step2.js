 

 // if 조건문 
    // 조건에 따라서 코드를 실행하거나 실행하지 않을때 사용하는 구문
    // 가장 일반적인 조건문 : IF

    /*

        형태

        if( true/false ) { 참true일때 실행코드}
   
        2. 참 또는 거짓일때 실행
            if (T/f) {참/T 일때 실행코드;}
            else{ 거짓/f일때 실행코드;}


        3. 참 또는 거짓일때 조건주기
            if( T/F ){              
                else{}
            }else{
                if( T/F ){}
                else{}
            }
        
        4. 다수 조건 일때
            if( 조건1 ){ }
             else if( 조건2 ){ }
             else if( 조건3 ){ }
             else if( 조건4 ){ }
             else {}        
            */
   

        //if (조건) : 조건의 결과가 참이면 {} 안으로 들어가고 아니면 {} 못들어감 
    if(273 < 100) {
        console.log('273 < 100 => true'); // 실행 조건이 false이니까 실행x
    }
    
    console.log('1종료');  // 실행 [ 조건문과 상괸이 없어요 왜냐 중괄호 밖이니까]


    const date = new Date(); // new Date(); 현재시간을 알려주는 코드[클래스]
    console.log( date );
    const hour = date.getHours(); // 현재시간.getHours() : 현재시간에서 시분초 중에서 시 를 반환 함수.
    console.log( hour );

    // 1. 만약에 현재 시 가 12보다 작으면 오전
    if( hour < 12) { console.log('오전입니다.') };
    if( hour >=12) { console.log('오후입니다.') };

    

    if( hour < 12) { console.log('오전입니다.');}
    else( console.log('오후입니다') );
    


    if( hour < 11 ){ 
        console.log('아침 먹을시간입니다.');
    } else{ 
        
        if( hour < 15){
            console.log('점심 먹을시간입니다.');
        }else{
            console.log('저녁 먹을 시간입니다.')
        }
    }


    if( hour < 11 ){ 
        console.log('아침 먹을시간입니다.'); }
    else if ( hour < 15 ){ console.log('점심 먹을 시간입니다.'); }
    else { console.log('저녁 먹을 시간입니다.'); }


    //문제4
    if ( a > 0) {
        console.log( '입력한 숫자는 양수입니다.')
    } else if ( a== 0) {
        console.log(  ' 입력한 숫자는 0입니다.');
    } else{
        console.log(' 입력한 숫자는 음수입니다.')
    }

    //문제5
    if( a % 2 == 0){console.log("짝수입니다.");}
    else{ console.log("홀수입니다.");}


    //문제6
      
    /*
        계절 기준 : 3~5[봄] , 6~8[여름] , 9~11[가을], 12~2[겨울]
        if ( 3 < a < 5) [x]
        if( a >= 3 && a <= 5){봄}
        else if ( a>=6 && a<8){여름}
        else if ( a>=9 && a<11){가을}
        else if ( a==12 || a<=2) {겨울}
    
        */



