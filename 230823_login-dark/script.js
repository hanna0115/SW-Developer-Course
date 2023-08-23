// user-id input창에 text 입력시 span 위치 변경
const idInput = document.querySelector('.user-id input');

idInput.addEventListener('input', function(){
  if(this.value.length == 0) {
    this.parentNode.classList.remove('txt');
  } else {
    this.parentNode.classList.add('txt');
  }
})


// user-pw input창에 text 입력시
const pwInput = document.querySelector('.user-pw input');

pwInput.addEventListener('input', function(){
  if(this.value.length == 0) {
    this.parentNode.classList.remove('txt');
    this.parentNode.querySelector('p').style.display = 'none';
  } else {
    this.parentNode.classList.add('txt');
    this.parentNode.querySelector('p').style.display = 'block';
  }
})


// user-pw p 태그 클릭시
document.querySelector('.user-pw p').addEventListener('click', function(){
  if(pwInput.type == 'password') {
    pwInput.type = 'text';
    this.textContent = '비밀번호 숨김';
  } else {
    pwInput.type = 'password';
    this.textContent = '비밀번호 표시';
  }
})

// 로그인 버튼 활성화
document.querySelectorAll('.inputbox input').forEach(function(item){
  item.addEventListener('focusout', function(){
    if(idInput.value.length && pwInput.value.length) {
      document.querySelector('.login-box').classList.add('allow');
    } else {
      document.querySelector('.login-box').classList.remove('allow');
    }
  })
})


// .mode 클릭시 테마 변경
document.querySelector('.mode').addEventListener('click', function(e){
  e.preventDefault();
  document.querySelector('body').classList.toggle('dark');

  if(document.querySelector('body').classList.contains('dark')) {
    this.innerHTML = '<a href="">Lightmode</a>';
    document.querySelector('.logo a img').src = './images/logo-dark.png';
  } else {
    this.innerHTML = '<a href="">Darkmode</a>';
    document.querySelector('.logo a img').src = './images/logo-light.png';
  }
})