
// 회원가입창
const userid = document.getElementById('signup-id');
const pw = document.getElementById('signup-pwd');
const pwCheck = document.getElementById('pwd-check');
const nickname = document.getElementById('nickname')
let validid = false
let checkid = ''
function validId(){
  console.log(userid)
  console.log(typeof userid.value)
  if(userid.value !==''){//정규식 해야한다...
    alert('test')
  
  }else{
    document.getElementById('already').innerHTML = '아이디를 입력해주세요';
    document.getElementById('already').style.color = 'red';
            userid.focus()
  }
}

//    아이디 중복체크
// function validId() {

//     if (userid.value !== '') {
//         $.ajax({
//             type: "GET",
//             url: '/login/register',
//             enctype: "multipart/form-data",
//             async : false,
//             data: {user_id: userid.value},
//             success: function (response) {
//                 validid = response['status']

//                 if (validid == true) {
//                     document.getElementById('already').innerHTML = '사용 가능한 아이디입니다.';
//                     document.getElementById('already').style.color = 'white';
//                     checkid = userid.value
//                     pw.focus()
//                 } else {
//                     console.log(validid)
//                     document.getElementById('already').innerHTML = '이미 존재하는 아이디 입니다.';
//                     document.getElementById('already').style.color = 'red';
//                     userid.value = ''
//                     userid.focus()
//                 }
//             }//ajax
//         })

//     } else {
//         document.getElementById('already').innerHTML = '아이디를 입력해주세요';
//         document.getElementById('already').style.color = 'red';
//         userid.focus()

//     }

// }

    //비밀번호
function checkPw() {
    if (pw.value.length < 4 || pw.value.length > 8) {
        alert('비밀번호는 최소 4자 ~최대 8자로 설정해주세요')
        pw.value = '';
        pw.focus();
    }
    if (pw.value !== '' && pwCheck.value !== '') {
        if (pw.value === pwCheck.value) {
            document.getElementById('same').innerHTML = '비밀번호가 일치합니다.';
            document.getElementById('same').style.color = 'black';
            nickname.focus();
        } else {
            document.getElementById('same').innerHTML = '비밀번호가 일치하지 않습니다.';
            document.getElementById('same').style.color = 'red';
            pwCheck.value = '';
            pwCheck.focus();
        }
    }
}

// //     닉네임
// function checkNickname() {
//     if (nickname.value === '') {
//         alert('닉네임을 입력해주세요')
//         nickname.focus()
//     } else if (nickname.value < 2 || nickname.value > 8) {
//         alert('닉네임은 2~8자 까지 가능합니다.')
//         nickname.value=''
//          nickname.focus()
//     }
// }

// //    회원가입 버튼
// function submitSignUp() { 
//     if (validid === true && (pw.value.length >= 4 && pw.value.length <= 8) && pw.value === pwCheck.value && nickname.value != '' && nickname.value.length >= 2 && nickname.value.length <= 8 ) {
//         if (checkid !== userid.value) {
//             alert('아이디를 다시 확인해주세요')
//             return false
//         }//아이디 중복 체크하고 다른 아이디로 변경했을 경우 대비
//         else {
//             $.ajax({
//                 type: "POST",
//                 url: '/login/register',
//                 enctype: "multipart/form-data",
//                 data: {
//                     user_id: userid.value,
//                     user_pw: pw.value,
//                     user_name: nickname.value
//                 },
//                 success: function (response) {
//                     alert(response['msg']);
//                     window.location.href = '/'
//                 }
//             })
//         }
//     } else if (validid !== true) {
//         alert('아이디 중복체크를 해주세요!')
//         return false
//     } else if (pw.value.length < 4 || pw.value.length > 8) {
//         alert('비밀번호는 최소 4자 ~최대 8자로 설정해주세요')
//         return false
//     } else if (pw.value !== pwCheck.value) {
//         alert('비밀번호를 확인해주세요')
//         return false
//     } else if (nickname.value === '') {
//         alert('닉네임을 설정해주세요')
//         return false
//     } else {
//         alert('회원가입 폼을 제대로 기입해주세요')
//         return false
//     }
// }


// 로그인
