let teamList = [
    { 'tcode': 1, 'tname': '개발팀' },
    { 'tcode': 2, 'tname': '디자인팀' },
    { 'tcode': 3, 'tname': '기획팀' }
]

let personList = [
    { 'pcode': 11, 'pname': '김민준', 'position': '선임', 'tcode': 1, 'img': 'https://placehold.co/100x100' },
    { 'pcode': 21, 'pname': '이서연', 'position': '수석', 'tcode': 2, 'img': 'https://placehold.co/100x100' },
    { 'pcode': 31, 'pname': '박도윤', 'position': '팀장', 'tcode': 3, 'img': 'https://placehold.co/100x100' }
]

let vacationList = [
    { 'vcode': 101, 'pcode': 11, 'vsdate': '2025-08-04', 'vedate': '2025-08-04', 'vreason': '병원 진료' },
    { 'vcode': 102, 'pcode': 21, 'vsdate': '2025-07-21', 'vedate': '2025-07-25', 'vreason': '여름 휴가' }
]

let lastTeamCode = 3
let lastPersonCode = 31
let lastVacationCode = 102

// ================= 부서 =================

function teamPrint() {
    let html = ''

    for (let index = 0; index <= teamList.length - 1; index++) {
        html += '<tr>'
        html += '<td>' + teamList[index].tname + '</td>'
        html += '<td>'
        html += '<button class="updateBtn" onclick="teamUpdate(' + teamList[index].tcode + ')">수정</button>'
        html += '<button class="deleteBtn" onclick="teamDelete(' + teamList[index].tcode + ')">삭제</button>'
        html += '</td>'
        html += '</tr>'
    }

    document.querySelector('#teamTbody').innerHTML = html
    teamSelectPrint()
}

function teamAdd() {
    let teamInput = document.querySelector('#teamInput')
    let tname = teamInput.value

    if (tname == '') {
        alert('부서명을 입력하세요.')
        return
    }

    for (let index = 0; index <= teamList.length - 1; index++) {
        if (teamList[index].tname == tname) {
            alert('이미 존재하는 부서명입니다.')
            return
        }
    }

    lastTeamCode = lastTeamCode + 1

    let team = {
        'tcode': lastTeamCode,
        'tname': tname
    }

    teamList.push(team)
    teamInput.value = ''

    teamPrint()
    personPrint()
}

function teamUpdate(tcode) {
    let newName = prompt('새로운 부서명을 입력하세요.')

    if (newName == null || newName == '') {
        return
    }

    for (let index = 0; index <= teamList.length - 1; index++) {
        if (teamList[index].tcode == tcode) {
            teamList[index].tname = newName
        }
    }

    teamPrint()
    personPrint()
}

function teamDelete(tcode) {
    for (let index = 0; index <= personList.length - 1; index++) {
        if (personList[index].tcode == tcode) {
            alert('해당 부서에 소속된 사원이 있어 삭제할 수 없습니다.')
            return
        }
    }

    for (let index = 0; index <= teamList.length - 1; index++) {
        if (teamList[index].tcode == tcode) {
            teamList.splice(index, 1)
        }
    }

    teamPrint()
}

// 사원 등록 select에 부서 목록 출력
function teamSelectPrint() {
    let html = '<option value="disabled">부서를 선택하세요</option>'

    for (let index = 0; index <= teamList.length - 1; index++) {
        html += '<option value="' + teamList[index].tcode + '">' + teamList[index].tname + '</option>'
    }

    document.querySelector('#personTeamSelect').innerHTML = html
}

// ================= 사원 =================

function personPrint() {
    let html = ''

    for (let index = 0; index <= personList.length - 1; index++) {
        let person = personList[index]
        let teamName = ''

        for (let tIndex = 0; tIndex <= teamList.length - 1; tIndex++) {
            if (teamList[tIndex].tcode == person.tcode) {
                teamName = teamList[tIndex].tname
            }
        }

        html += '<tr>'
        html += '<td><img src="' + person.img + '"></td>'
        html += '<td>' + person.pname + '</td>'
        html += '<td>' + teamName + '</td>'
        html += '<td>' + person.position + '</td>'
        html += '<td>'
        html += '<button class="updateBtn" onclick="personUpdate(' + person.pcode + ')">수정</button>'
        html += '<button class="deleteBtn" onclick="personDelete(' + person.pcode + ')">삭제</button>'
        html += '</td>'
        html += '</tr>'
    }

    document.querySelector('#personTbody').innerHTML = html
    vacationPersonSelectPrint()
}

function personAdd() {
    let pname = document.querySelector('#personNameInput').value
    let position = document.querySelector('#personPositionInput').value
    let tcode = document.querySelector('#personTeamSelect').value
    let fileInput = document.querySelector('#personImgInput')

    if (pname == '') {
        alert('이름을 입력하세요.')
        return
    }

    if (position == '') {
        alert('직급을 입력하세요.')
        return
    }

    if (tcode == 'disabled') {
        alert('부서를 선택하세요.')
        return
    }

    lastPersonCode = lastPersonCode + 1

    let img = 'https://placehold.co/100x100'

    if (fileInput.files.length > 0) {
        img = URL.createObjectURL(fileInput.files[0])
    }

    let person = {
        'pcode': lastPersonCode,
        'pname': pname,
        'position': position,
        'tcode': Number(tcode),
        'img': img
    }

    personList.push(person)

    document.querySelector('#personNameInput').value = ''
    document.querySelector('#personPositionInput').value = ''
    document.querySelector('#personTeamSelect').value = 'disabled'
    document.querySelector('#personImgInput').value = ''

    personPrint()
}

function personUpdate(pcode) {
    let newName = prompt('새로운 이름을 입력하세요.')
    let newPosition = prompt('새로운 직급을 입력하세요.')

    if (newName == null || newName == '') {
        return
    }

    if (newPosition == null || newPosition == '') {
        return
    }

    for (let index = 0; index <= personList.length - 1; index++) {
        if (personList[index].pcode == pcode) {
            personList[index].pname = newName
            personList[index].position = newPosition
        }
    }

    personPrint()
    vacationPrint()
}

function personDelete(pcode) {
    for (let index = 0; index <= personList.length - 1; index++) {
        if (personList[index].pcode == pcode) {
            personList.splice(index, 1)
        }
    }

    for (let index = vacationList.length - 1; index >= 0; index--) {
        if (vacationList[index].pcode == pcode) {
            vacationList.splice(index, 1)
        }
    }

    personPrint()
    vacationPrint()
}

// 휴가 신청 select에 사원 목록 출력
function vacationPersonSelectPrint() {
    let html = '<option value="disabled">휴가 신청 사원을 선택하세요</option>'

    for (let index = 0; index <= personList.length - 1; index++) {
        html += '<option value="' + personList[index].pcode + '">' + personList[index].pname + '</option>'
    }

    document.querySelector('#vacationPersonSelect').innerHTML = html
}

// ================= 휴가 =================

function vacationPrint() {
    let html = ''

    for (let index = 0; index <= vacationList.length - 1; index++) {
        let vacation = vacationList[index]
        let personName = ''

        for (let pIndex = 0; pIndex <= personList.length - 1; pIndex++) {
            if (personList[pIndex].pcode == vacation.pcode) {
                personName = personList[pIndex].pname
            }
        }

        html += '<div class="vacationBox">'
        html += '<div class="vacationName">' + personName + '</div>'
        html += '<div>' + vacation.vsdate + ' ~ ' + vacation.vedate + '</div>'
        html += '<div>사유: ' + vacation.vreason + '</div>'
        html += '<button onclick="vacationDelete(' + vacation.vcode + ')">신청취소</button>'
        html += '</div>'
    }

    document.querySelector('#vacationListBox').innerHTML = html
}

function vacationAdd() {
    let pname = document.querySelector('.pname').value
    let startDate = document.querySelector('.startDate').value
    let endDate = document.querySelector('.endDate').value
    let reason = document.querySelector('.reason').value

    if (pname == 'disabled') {
        alert('사원을 선택하세요.')
        return
    }

    if (startDate == '') {
        alert('휴가 시작일을 선택하세요.')
        return
    }

    if (endDate == '') {
        alert('휴가 종료일을 선택하세요.')
        return
    }

    if (reason == '') {
        alert('휴가 사유를 입력하세요.')
        return
    }

    lastVacationCode = lastVacationCode + 1

    let vacation = {
        'vcode': lastVacationCode,
        'pcode': Number(pname),
        'vsdate': startDate,
        'vedate': endDate,
        'vreason': reason
    }

    vacationList.push(vacation)

    document.querySelector('.pname').value = 'disabled'
    document.querySelector('.startDate').value = ''
    document.querySelector('.endDate').value = ''
    document.querySelector('.reason').value = ''

    vacationPrint()
}

function vacationDelete(vcode) {
    for (let index = 0; index <= vacationList.length - 1; index++) {
        if (vacationList[index].vcode == vcode) {
            vacationList.splice(index, 1)
        }
    }

    vacationPrint()
}

// ================= 처음 실행 =================

teamPrint()
personPrint()
vacationPrint()
