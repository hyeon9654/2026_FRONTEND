/*
// 반복문 : for( 초기값; 조건식; 증감식){ 실행문 }
// 배열과 반복문 관계 : 배열의 인덱스는 0부터 요소/자료가 저장되는 순서 규칙
// 즉] 인덱스는 0부터 마지막 인덱스까지 1씩증가

// [1] 배열의 데이터를 하나씩 출력
let 과일목록 = [ '사과', '포도', '딸기' ]
// 1.
console.log( 과일목록[0] )
console.log( 과일목록[1] )
console.log( 과일목록[2] )
// 2. length란? 배열내 요소/자료 개수 반환, 마지막인덱스(총개수 - 1) : 배열.length - 1
for( let 인덱스 = 0; 인덱스 <= 과일목록.length -1; 인덱스++ ){
    console.log( 과일목록[ 인덱스 ] )
} 

// *[생각해보기] 3개의 이름을 입력받아 배열을 저장하고 배열에 저장된 이름들을 HTML 출력하시오.
let 이름목록 = []
let 이름1 = prompt('이름 입력')
let 이름2 = prompt('이름 입력')
let 이름3 = prompt('이름 입력')
이름목록.push(이름1,이름2,이름3)
console.log(이름목록)
document.querySelector( "h3" ).innerHTML = 이름목록
//for문 이용하기
let 이름목록 = []
for( let 반복수 = 1; 반복수 <= 3; 반복수++){
    let 입력 = prompt("이름을 입력하세요")
    이름목록.push( 입력 )
} 
// 반복문 이용한 HTML 구성
let html = ``
for( let 인덱스 = 0; 인덱스 <= 이름목록.length - 1; 인덱스++){
    html += `<li> ${ 이름목록[ 인덱스 ]} </li>`
}
document.querySelector( "ol" ).innerHTML = html

// 문제1 : 
for( let 수 = 1 ; 수 <= 10 ; 수++ ){ console.log( 수 ) }

// 문제2 : 반복문의 반복변수는 주로 i( 이터레이터 )
let fruits = ['사과' , '바나나','포도','딸기']
for( let i = 0 ; i<fruits.length ; i++ ){ console.log( fruits[i] )}

// 문제3

// 문제4

// 문제5 

// 반복문 제어키워드
// 1. continue; 반복문의 증감식으로 이동
for( let 반복수 = 1; 반복수 <= 5; 반복수++){
    if( 반복수 == 3 ){ continue } // 반복문의 *증감식*으로 흐름 이동
    console.log( 반복수 )   // 즉] 반복수가 3이면 console.log 실행X
}
// 2. break;    반복문의 탈출/종료
for( let 반복수 = 1; 반복수 <= 5; 반복수++){
    if( 반복수 == 3){break} //break 만나면 for문의 '}' 끝나는 밖으로 이동.
    console.log( 반복수 )
}
// !! 여기로 이동 !!
 */
// 3. 무한루프 ( 무한반복 ) *특정조건의 break 권장*
// for( ; ; ){ console.log( '무한출력중' )}
for( ; ; ){ 
    let 입력 = prompt()         // 무한입력
    if( 입력 == 'EXIT' ){break} // 입력한 값이 'EXIT' 이면 무한루프 종료

}