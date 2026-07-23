/*
    1. 기획서 / 요구사항에 따른 프로토타입
    2. 메모리설계
        1) 저장해야할 것들을 모두 찾아보기,  카테고리명/제품명/가격/이미지/등록일
        2) 정규화 = 이상현상 최소화
            - 속성들 간의 종속관계 파악 (1:1관계, 1:N 관계), 테이블 나누기
        3) 쪼개진 테이블 간의 연관 만들기
            3-1) 테이블당 식별자(PREMARY KEY = PK) 1개 권장
            3-2) 상하관계 파악해서 식별자(코드) 하위요소에 저장한다. (FK: 참조키, 외래키)
        4) JS로 표현, 표 = 배열 / 객체 = 행 / 열 = 속성
    
    3. 기능설계: CRUD, RESTAPI
        등록(create)    : 게시물쓰기, 회원가입, 수강신청 등등
            실행조건: 등록버튼클릭, 함수명: productAdd, 매개변수:x , 반환값:x
        조회(read)      : 게시물 전체조회, 마이페이지 등등 
            실행조건: JS실행/최신화(등록/수정/삭제) , 함수명: productPrint , 매개변수:x , 반환값:x
        수정(update)    : 게시물 수정, 내 정보 수정, 수강신청 등등
            실행조건: 수정버튼 클릭, 함수명: productUpdate, 매개변수: 수정할제품코드(누구를/대상), 반환값: x
        삭제(delete)    : 게시물 삭제, 회원탈퇴 등등
            실행조건: 삭제버튼 클릭, 함수명: productDelete, 매개변수: 삭제할제품코드, 반환값: x
    
            
*/
let categoryList =[{ 'ccode': 1, 'cname': '음료'}, {'ccode': 2, 'cname': '과자'}]
let productList = [
    {'pcode' : 1, 'pname': '콜라','pprice':1000, 'pimg': 'https://placehold.co/100x100','pdate':'2026-01-16','ccode':1},
    {'pcode' : 1, 'pname': '사이다','pprice':2000, 'pimg': 'https://placehold.co/100x100','pdate':'2026-01-16','ccode':1}
]

// [1] 전체조회함수
productPrint()
function productPrint(){
    // 1.어디에
    let tbody = document.querySelector( '#main table tbody' )
    // 2. 무엇을 , 배열내 모든 객체(자료) 들을 HTML(문자열)형식 구성
    let html = ""
    for( let index = 0 ; index <= productList.length-1 ; index++ ){
        let product = productList[index] // index번째 제품객체 1개 
        // ++ 현재 index번째 제품의 카테고리번호에 해당하는 카테고리명 찾기
        let cname = ''
        for( let j = 0 ; j <= categoryList.length-1 ; j++ ){
            if( categoryList[j].ccode == product.ccode ){ // 만약에 카테고리내 카테고리번호 와 제품의 카테고리번호 같다면 
                cname = categoryList[j].cname;
                break; // 찾았으면 끝 
            }
        } 
        html += `<tr>
                    <td> <img src="${product.pimg}"/> </td>
                    <td> ${cname} </td> <td> ${product.pname} </td> <td> ${product.pprice} </td> <td> ${product.pdate} </td> 
                    <td> 
                        <button class="deleteBtn" onClick="productDelete(${product.pcode})">삭제</button> 
                        <button class="updateBtn" onClick="productUpdate(${product.pcode})">수정</button> 
                    </td>
                </tr>`
    }
    // 3.출력
    tbody.innerHTML = html
}

// [2] 삭제함수, 출력함수에서 삭제할 코드를 매개변수로 받아온다.
function productDelete( pcode ){
    // 1. 삭제할 pcode의 제품객체를 배열세서 찾는다.
    for(let i=0; i<=productList.length-1;i++){
        if(productList[i].pcode == pcode){
            // 2. 배열에서 요소 삭제 .splice(인덱스버호, 개수)
            productList.splice(i , 1);
            alert('삭제 성공')
            // 3. 화면 최신화(전체조회 새로고침, 재렌더링)
            productPrint();
            return; // 주의할점: return: function{}탈출. vs break: for{}탈출
        }
    }
}

// [3] 수정함수
function productUpdate(pcode){
    // 1. 수정할 pcode의 제품객체를 배열에서 찾는다
    for(let i=0; i<=productList.length-1;i++){
        if(productList[i].pcode == pcode){
            let newPname = prompt('수정할 제품명을 입력하세요.')
            let newPprice = prompt('수정할 가격을 입력하세요.')
            productList[i].pname = newPname     // 2. 배열에서 특정한 요소값 수정
            productList[i].pprice = newPprice
            productPrint(); return;
        }
    }
}
// [4] 등록함수
let finalPcode = 2  // 현재 마지막으로 사용한 제품코드
function productAdd(){
    // 1. 입력받은 값 가져오기
    let category = document.querySelector('.category').value;  // <select>의 value는 선택한 <option value> 변환
    let name = document.querySelector('.name').value;
    let price = document.querySelector('.price').value;
    let image = document.querySelector('.image').files[0]; // .files 파일 여러개 등록
        //꼼꼼히! 유효성 판단/검사
        if(category == 'disabled'){alert('카테고리 선택해주세요'); return;} // 코드의 흐름이 return 만나면 아래코드는 생략, 강제함수종료
    // 2. 입력받은 값들을 객체화
        // pcode: 제품식별번호로 사용자가 지정하지 않고 자동번호 부여, 마지막 사용된 제품코드에 + 1
        // pdate: 현재 시스텐 날짜/시간 함수, new Date()
    let pdate = `${new Date().getFullYear()}- ${new Date().getMonth()}- ${new Date().getDate()}`
    let object = {ccode : category, pname: name, 
                  pprice: price, 
                  pimg: image == undefined ? 'https://placehold.co/100x100' : URL.createObjectURL(image), // 입력받은 이미지정보를 가상의URL 생성
                  pcode : finalPcode+1, pdate: pdate}
    console.log(object)

    // 3. 배열 저장
    productList.push(object); finalPcode+1;
    // 4. 성공
    alert('등록 완료'); productPrint();
    
}
// 현재연도: new Date().getFullYear()
console.log(new Date().getFullYear(), new Date().getMonth(), new Date().getDate())