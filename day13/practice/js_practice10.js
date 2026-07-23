// 1. HTML 
// 2. 메모리 구조 
// let memberList = [ { no , id, pw } , { no , id , pw } ]
// 3. 함수
// [1] signup 함수 , 함수 안에서 선언된 변수는 *지역변수* 이므로 함수가 종료되면 사라진다.
function signup(){
    // 1. 입력받은 값 가져오기 
    let id = document.querySelector('.signId').value;
    let pw = document.querySelector('.signPw').value;
    // [*] localStorage 에 memberList 배열 가져오기 *JSON파싱*
    let memberList = JSON.parse( localStorage.getItem('memberList') )
    console.log( memberList ) // 없으면 null
    if( memberList == null ){ memberList = [ ] } // 최초 등록이면 배열 구성 
    // 마지막인덱스 :  .length-1  , 마지막인덱스 회원번호 + 1
    let no = memberList.length == 0 ? 1 : memberList[ memberList.length-1 ].no + 1
    // 2. 객체화 
    let obj = { no , id , pw }; console.log( obj );
    // 3. 배열 저장한다.
    memberList.push( obj ); console.log( memberList );
    // 4. 성공처리
    alert('등록 성공');
    // [*] localStorage 에 memberList 배열 저장하기 
    localStorage.setItem( 'memberList' , JSON.stringify( memberList ) )
} // f end

// [2] login 함수, 자료 단순 비교
function login( ){
     // 1. 입력받은 값 가져오기 
    let id = document.querySelector('.loginId').value 
    let pw = document.querySelector('.loginPw').value
    // 2. 입력받은 값이 배열내 정보 와 비교 
    // [*] localStorage 기존 배열 가져온다. 
    let memberList = JSON.parse( localStorage.getItem( 'memberList') ) ;
    if( memberList != null ){ 
        for( let i = 0 ; i <= memberList.length - 1 ; i++ ){
            if( memberList[i].id == id && memberList[i].pw == pw ){
                alert('로그인 성공');
                return;
            }
        }
    }
    alert(' 동일한 회원정보가 없습니다. ')
}// f end 

// * 코드가 변경될 때 마다 자동 저장 되면서 라이브서버 재실행되면 초기화*