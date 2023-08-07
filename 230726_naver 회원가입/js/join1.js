document.querySelectorAll('input').forEach(function(input){
  input.addEventListener('focus', function(){
    this.parentNode.classList.add('border-act');
  })

  input.addEventListener('focusout', function(){
    this.parentNode.classList.remove('border-act');
  })
})


let idveri = pwveri = pwchkveri = nameveri = bithveri = genderveri = phoneveri = addressveri = false;
let mailveri = true;
// Essential Infomation
let essenInfo = '<span class="text-red">필수 정보입니다.</span>';

// // .warn red text
// function red(user, text){
//   document.querySelector(`.${user} .warn`).innerHTML = '<span class="text-red">' + text + '</span>'
// }

// // .warn green text
// function green(user, text){
//   document.querySelector(`.${user} .warn`).innerHTML = '<span class="text-green">' + text + '</span>'
// }


// 아이디
document.querySelector('.userid input').addEventListener('focusout', function(){
  let userId = this.value;
  let idExp = /^[a-z0-9]{5,8}$/
  let idWarn = document.querySelector('.userid .warn');

  if(userId.length == 0) {
    idWarn.innerHTML = essenInfo;
  } else if (!idExp.test(userId)) {
    // 정규식에 맞지 않을 때 = 조건이 참
    idWarn.innerHTML = '<span class="text-red">5~8자의 영문 소문자, 숫자만 사용가능합니다.</span>';
  } else {
    // 위 조건에 둘 다 해당하지 않고 값을 잘 입력했을 때
    idveri = true;
    idWarn.innerHTML = '<span class="text-green">멋진 아이디네요!</span>';
  }
})

// 비밀번호
document.querySelector('.userpw input').addEventListener('focusout', function(){
  let userPw = this.value;
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  let pwWarn = document.querySelector('.userpw .warn');
  let pwText = document.querySelector('.userpw .inputbox p');
  let pwImg = document.querySelector('.userpw .inputbox img');

  if(userPw.length == 0) {
    pwWarn.innerHTML = essenInfo;
    // pwText 내용 비우기
    pwText.innerHTML = '';
    pwImg.src = './images/m_icon_pw_step_01.png'
  } else if(!pwExp.test(userPw)) {
    pwWarn.innerHTML = '<span class="text-red">8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>';
    pwText.innerHTML = '<span class="text-red">사용불가</span>'
    pwImg.src = './images/m_icon_pw_step_10.png'
  } else {
    pwveri = true;
    pwWarn.innerHTML = '';
    pwText.innerHTML = '<span class="text-green">안전</span>'
    pwImg.src = './images/m_icon_pw_step_04.png'
  }
})
