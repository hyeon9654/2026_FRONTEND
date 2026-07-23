getBoard();
function getBoard(){
    const url = new URLSearchParams( location.search );
    const selectNo = url.get('no');
    let boardList = localStorage.getItem('boardList');
    if( boardList == null ){
        boardList = []
    }else{boardList = JSON.parse(boardList);}
    for( let index = 0; index <= boardList.length -1; index++){
        const obj = boardList[index];
        if( obj.no == selectNo ){
            document.querySelector('#title').innerHTML = obj.title
            document.querySelector('#content').innerHTML = obj.content;
        return;
        }
    }
}


// (2) 삭제함수

function boardDelete(){

    // 1. URL(웹주소) 의 경로 가져오기 

    const url = new URLSearchParams( location.search); 

    // 2. 경로 상의 선택된 게시물번호(쿼리스트링) 가져오기

    const selectNo = url.get('no');

    // 3. localStorage 에서 배열 가져오기

    let boardList = localStorage.getItem('boardList');

    if( boardList == null ) { boardList = [] }

    else{ boardList = JSON.parse( boardList );}

    // 4. 배열내 선택된 게시물번호가 존재하면 

    for( let i = 0 ; i < boardList.length ; i++ ){

        const obj = boardList[i];

        if( obj.no == selectNo ){ // 만약에 선택된 게시물번호를 찾았으면

            // 5. 확인용비밀번호를 입력받아 기존 비밀번호와 일치하면 삭제 , 아니면 실패

            const confirm = prompt('비밀번호 입력');

            if( obj.pwd == confirm ){ //비밀번호 일치  

                boardList.splice( i , 1 ); // 객체 1개 삭제

                localStorage.setItem( 'boardList' , JSON.stringify(boardList) );

                alert('삭제 성공');

                location.href = 'list.html';  // 6. (성공) list.html 이동

            }else{

                alert('삭제 실패 : 비밀번호 불일치 ')

            }

        }

    } // for end 

} // func end 



// (3) 수정 이동 함수 

function boardUpdateView (){

 // 1. URL(웹주소) 의 경로 가져오기 

 const url = new URLSearchParams( location.search );

 // 2. 경로 상의 선택된 게시물번호(쿼리스트링) 가져오기

 const selectNo = url.get('no');

 // 3. localStorage 에서 배열 가져오기

 let boardList = localStorage.getItem('boardList');

 if( boardList == null ) { boardList = [] }

 else{ boardList = JSON.parse( boardList);} 

 // 4. 배열내 선택된 게시물번호가 존재하면 

 for( let i = 0 ; i < boardList.length ; i++ ){

 const obj = boardList[i];

 if( obj.no == selectNo ){

 const confirm = prompt('비밀번호 입력')

 if( obj.pwd == confirm ){

 // 만약에 비밀번호가 일치 하면 수정페이지로 이동 

 location.href = `update.html?no=${selectNo}`

 }else{

 alert('수정 불가 : 비밀번호 불일치');

 }

 }

 } // for end 

 // 5. 확인용비밀번호를 입력받아 기존 비밀번호와 일치하면 수정페이지 이동

} // func end 