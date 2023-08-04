let inputs = document.querySelectorAll('input');

inputs.forEach(function(input){
  // 모든 input 태그에 focusin 되면 부모인 .inputbox에 border-act class add
  input.addEventListener('focusin', function(){
    this.parentNode.classList.add('border-act');
  })

  // 모든 input 태그에 focusout되면 부모인 .inputbox border-act class remove
  input.addEventListener('focusout', function(){
    this.parentNode.classList.remove('border-act');
  })
})


let idveri = pwveri = pwchkveri = nameveri = bithveri = genderveri = phoneveri = addressveri = false;
let mailveri = true;


// red text
function red(user, text){
  document.querySelector(`.${user} .warn`).innerHTML = '<span class="text-red">' + text + '</span>'
}

// green text
function green(user, text){
  document.querySelector(`.${user} .warn`).innerHTML = '<span class="text-green">' + text + '</span>'
}


// 아이디
document.querySelector('.userid input').addEventListener('focusout', function(){
  let userid = this.value;
  let idExp = /^[a-z0-9]{5,8}$/
  
  if(userid.length == 0) {
    red('userid', '필수 정보입니다.');
  } else if(!idExp.test(userid)) {
    red('userid', '5~8자의 영문 소문자, 숫자만 사용가능합니다.');
  } else {
    idveri = true;
    green('userid', '멋진 아이디네요!');
  }
})


// 비밀번호
document.querySelector('.userpw input').addEventListener('focusout', function(){
  let userpw = this.value;
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  if(userpw.length == 0) {
    red('userpw', '필수 정보입니다.');
    document.querySelector('.userpw .inputbox span').innerHTML = '';
  }
})

