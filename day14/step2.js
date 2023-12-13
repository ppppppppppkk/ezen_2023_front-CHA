/*

// 문제1) 입력받은 수 만큼 * 출력 

// 문제2) 입력받은 수 만큼 * 출력 [  - 3줄(3배수)마다 줄바꿈 ]
// 문제3) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*
**         
***      
****   
*****
// 문제4) 입력받은 줄 수 만큼 * 출력 [ ex) 5 ]
*****
****
***
**
*
// 문제5) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
    *
   **
  ***
 ****
*****
// 문제6) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*****
 ****
  ***
   **
    *
// 문제7) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
    *
   ***
  *****
 *******
*********
// 문제8) 입력받은 줄 수 만큼 * 출력  [ ex) 5 ]
*********
 *******
  *****
   ***
    *
// 문제9) 입력받은 줄 수 만큼 * 출력  [ ex) 10 ]
    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
// 문제10) 입력받은 줄 수 만큼 * 출력  [ ex) 7 ]
*     *
 *   *
  * *
   *
  * *
 *   *
*     *


*/

//문제 1.

let output = ''

for (let i = 1 ; i < 10; i++){
    output += '*'
}
output += '\n'

console.log(output)




// 문제 2.

const value2 = Number( prompt('문제2 수 입력 '));
for ( let i = 1 ; i<= value2 ; i++){
    output +=`*`
    // 만약에 i가 3배수이면 줄바꿈 처리
    if( i % 3 == 0){ output +=`\n`;}
}
console.log( output );



//문제 3. 
output = ''
for( let i = 0 ; i < 10 ; i++){
    for( let j = 0 ; j < 10 ; j++){
        if (j <= i)
    

    output += '*'
}
output += '\n'
}

console.log(output)

//문제 4.
output = ''
for( let i = 0 ; i < 10 ; i++){
    for( let j = 0 ; j < 10 ; j++){
        if (j >= i)
    

    output += '*'
}
output += '\n'
}

console.log(output)

//문제 7. =============================
output = ''
for( let i = 0 ; i <= 10 ; i++){
    for( let j = 0 ; j <= 10-i; j++){
      output += ' '}

    for ( let k = 0; k < (i * 2 + 1); k++){  
        output += '*'
    }
    output += '\n'
}
console.log(output)





//문제 8.==========================
output = ''
for( let i = 0 ; i <= 11 ; i++){
    for( let j = 0 ; j < i; j++){
      output += ' '}

    for ( let k = 0; k < ((11-i) * 2 + 1); k++){  
        output += '*'
    }
    output += '\n'
}

console.log(output)


//문제 9.===========================================
output = ''
for( let i = 0 ; i <= 10 ; i++){
    for( let j = 0 ; j <= 10-i; j++){
      output += ' '}

    for ( let k = 0; k < (i * 2 + 1); k++){  
        output += '*'
    }
    output += '\n'
}

for( let i = 0 ; i <= 10 ; i++){
    for( let j = 0 ; j <= i; j++){
      output += ' '}

    for ( let k = 0; k < ((10-i) * 2 + 1); k++){  
        output += '*'
    }
    output += '\n'
}

console.log(output)


//문제 10.=======================================
output = ''



for ( let i = 0 ; i<=5; i++ ){

    for (let j = 0 ; j <= 5 ; j++){

        if ( i == j ){output +='*';}

        else if ( i+j === 4){ output += `*`; }

        else{ output += ` `; }
    }
    output += `\n`
}

console.log(output);



// 문제9-2===================================================

 function 문제9(){
output = ''
for( let i = 0 ; i <= 10 ; i++){
    for( let j = 0 ; j <= 10-i; j++){
      output += ' '}

    for ( let k = 0; k < (i * 2 + 1); k++){  
        output += '*'
    }
    output += '\n'
}

for( let i = 0 ; i <= 10 ; i++){
    for( let j = -1 ; j <= i; j++){
      output += ' '}

    for ( let k = 0; k < ((9-i) * 2 + 1); k++){  
        output += '*'
    }
    output += '\n'
    }


console.log(output)
 }












// ======================================================================
function 문제10(){
    output = ''



    for ( let i = 0 ; i<=5; i++ ){
    
       for (let j = 0 ; j <= 5 ; j++){
    
            if ( i === j ){output +='*';}
    
            else if ( i+j === 5 -1){ output += `*`; }
    
            else{ output += ` `; }
        }
        output += `\n`
    }
    
    console.log(output);
    
    


}