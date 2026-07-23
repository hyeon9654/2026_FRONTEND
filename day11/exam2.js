/*예제 1: 요소 내용 변경하기, id가 'title'인 <h1> 요소의 내용을 'DOM 조작 성공!'으로 변경하시오.*/
const title = document.querySelector('#title')
title.innerHTML = "DOM 조작 성공!"
// let a = 3+3 , a + 2   VS  3+3+2
document.querySelector('#title').innerHTML = "DOM 조작 성공!"

/*예제 2: 사용자 입력값 가져와서 표시하기*/
function 작성함수(){
    // 1. 특정한 DOM 마크업 가져오기
    const 입력마크업 = document.querySelector('#usernameInput')
    // 2. 가져온 DOM마크업에서 value 속성 가져오기 
    const 입력값 = 입력마크업.value
    // 3. 출력할 특정한 dom에 출력하기
    document.querySelector('#greeting').innerHTML = 입력값  
} // f end 

/*예제 3: 요소 스타일 동적으로 변경하기*/
function 색상변경함수(){
    // 1. 특정한 마크업DOM 가져오기
    let 마크업 = document.querySelector('#colorBox')
    // 2. 가져온 마크업DOM 에서 style 속성 대입하기
    마크업.style = "background-color: skyblue; color: white; "
    // vs CSS속성명(카멜표기법)
    마크업.style.backgroundColor = 'skyblue'
    마크업.style.color = 'white'
} // f end 

/*예제 4: CSS 클래스 토글하기 (다크 모드 예시) */
function 토글함수( ){ // 토글? on/off
    // 1. 특정한 마크업DOM 가져오기 
    let 마크업 = document.querySelector('body')
    // 2. 가져온 마크업DOM에서 토글
        // .classList : 클래스 목록 반환  
        // .classList.toggle( '클래스명' ) : 클래스 목록에 특정 클래스명 대입/삭제
    마크업.classList.toggle( 'dark-mode' )
}

/*예제 5: 특정 HTML 요소 제거하기*/
function 삭제함수( ){
    // 1. 특정한 마크업 DOM 가져오기 
    let 마크업 = document.querySelector('#targetBox')
    // 2. 가져온 마크업 삭제하기 . remove()
    마크업.remove()
}
/*예제 6: 여러 요소에 동일한 작업 반복하기 */
// 1. 특정한 (여러개) 마크업 DOM 가져오기
let 마크업배열 = document.querySelectorAll('.item')
// 2. 가져온 여러개 마크업들을 반복하기
for( let index = 0 ; index <= 마크업배열.length-1 ; index++ ){
    let 아이템 = 마크업배열[index]
    아이템.style.color = 'green'
    아이템.style.fontWeight = 'bold'
    // 카멜표기법 VS CSS표기법 
    // 아이템.style = 'font-wight:bold;'
} // FOR END 

/*예제 7: 이미지 소스(src) 변경하기 ,'https://placehold.co/600x400/red/white'로 변경하시오. */
function 이미지변경함수( ){
    // 1. 특정한 마크업 DOM 가져오기 
    let 마크업 = document.querySelector('#mainImage')
    // 2. 가져온 마크업에 src 속성 대입하기
    마크업.src = 'https://placehold.co/600x400/red/white' 
}

/* 예제 8 : select 에서 선택한 option값 console 출력하기. */
// <select onchange="목록선택함수()"> 
function 목록선택함수( ){
    // 1. 특정한 마크업 DOM 가져오기 
    let 마크업 = document.querySelector('select')
    // 2. 가져온 마크업에 선택한 value 가져오기 
    let 선택값 = 마크업.value;
    console.log( 선택값 )
}

/* 예제 9 : input 에서 입력받은 값을 전역 배열에 저장하고 배열 상태를 출력하기. */
let 전역배열 = [ ]
function 등록함수(){
    // 1. 특정한 마크업 DOM 가져오기
    let 마크업 = document.querySelector('#nameInput')
    // 2. 가져온 마크업DOM 의 value 속성 값 가져오기
    let 입력값 = 마크업.value;
    // 3. 전역배열에 추가 , push 
    전역배열.push( 입력값 )
    // 4. 출력
    console.log( 전역배열 )
}