// 학과정보
const departments = [
    { id: 101, name: '컴퓨터공학과', office: '성결관 301호', manager: '김학과장' },
    { id: 102, name: '경영학과', office: '중생관 201호', manager: '이학과장' },
    { id: 103, name: '체육교육과', office: '체육관 401호', manager: '박학과장' }
]

// 학생정보
const students = [
    { id: 1, studentNumber: '20240001', name: '김철수', departmentId: 101, grade: 1 },
    { id: 2, studentNumber: '20240002', name: '이영희', departmentId: 102, grade: 2 },
    { id: 3, studentNumber: '20240003', name: '박지성', departmentId: 103, grade: 1 }
]

// 교과목정보
const subjects = [
    { id: 1001, code: 'CSE101', name: '프로그래밍기초', departmentId: 101, credit: 3, professor: '홍길동', time: '월1,2,3' },
    { id: 1002, code: 'CSE102', name: '웹프로그래밍', departmentId: 101, credit: 3, professor: '김교수', time: '수5,6,7' },
    { id: 2001, code: 'BUS101', name: '경영학원론', departmentId: 102, credit: 3, professor: '이교수', time: '화1,2,3' },
    { id: 3001, code: 'PED101', name: '스포츠교육론', departmentId: 103, credit: 2, professor: '박교수', time: '목3,4' }
]

// 수강신청내역
const enrollments = [
    { id: 1, studentId: 1, subjectId: 1001, status: '신청완료' },
    { id: 2, studentId: 1, subjectId: 1002, status: '신청완료' },
    { id: 3, studentId: 2, subjectId: 2001, status: '신청완료' },
    { id: 4, studentId: 3, subjectId: 3001, status: '신청완료' }
]

// 조회할 학생 ID 입력
const inputId = Number(prompt('조회할 학생 ID를 입력하세요. 예) 1, 2, 3'))

// 학생 찾기
let targetStudent = null

for (let i = 0; i < students.length; i++) {
    if (students[i].id == inputId) {
        targetStudent = students[i]
    }
}

// 학생이 없을 때
if (targetStudent == null) {
    console.log('해당 ID의 학생을 찾을 수 없습니다.')
} else {
    // 학과 찾기
    let targetDepartment = null

    for (let i = 0; i < departments.length; i++) {
        if (departments[i].id == targetStudent.departmentId) {
            targetDepartment = departments[i]
        }
    }

    // 학생 기본정보 출력
    console.log('===== 학생 조회 결과 =====')
    console.log('학생 ID:', targetStudent.id)
    console.log('학번:', targetStudent.studentNumber)
    console.log('이름:', targetStudent.name)
    console.log('학년:', targetStudent.grade)

    if (targetDepartment != null) {
        console.log('학과:', targetDepartment.name)
        console.log('학과사무실:', targetDepartment.office)
        console.log('학과장:', targetDepartment.manager)
    }

    console.log('===== 수강신청 내역 =====')

    let count = 0

    for (let i = 0; i < enrollments.length; i++) {
        if (enrollments[i].studentId == targetStudent.id) {
            const subjectId = enrollments[i].subjectId

            for (let j = 0; j < subjects.length; j++) {
                if (subjects[j].id == subjectId) {
                    console.log('과목코드:', subjects[j].code)
                    console.log('과목명:', subjects[j].name)
                    console.log('교수명:', subjects[j].professor)
                    console.log('학점:', subjects[j].credit)
                    console.log('강의시간:', subjects[j].time)
                    console.log('신청상태:', enrollments[i].status)
                    console.log('--------------------')
                    count++
                }
            }
        }
    }

    if (count == 0) {
        console.log('수강신청 내역이 없습니다.')
    }
}