// input focusin 되면 부모 .inputbox에 border-act class add
$('input').focusin(function(){
  $(this).parent('.inputbox').addClass('border-act');
})

// input에 focusout되면 부모 .inputbox에 border-act class remove
$('input').focusout(function(){
  $(this).parent('.inputbox').removeClass('border-act')
})

let idveri = pwveri = pwchkveri = nameveri = bithveri = genderveri = phoneveri = addressveri = false;
let mailveri = true;

// 아이디
// .userid input에 focusout 됐을 때 입력된 값의 길이가 0이라면(조건)
// .userid warn에 내용을 작성(실행문)
$('.userid input').focusout(function(){
  let userid = $(this).val();
  // 최소 5글자 ~ 최대 8글자 사이 영문 소문자 + 숫자 포함
  let idExp = /^[a-z0-9]{5,8}$/

  if(userid.length == 0) {
    $('.userid .warn').html('<span class="text-red">필수 정보입니다.</span>');
  } else if(!idExp.test(userid)) {
    $('.userid .warn').html('<span class="text-red">5~8자의 영문 소문자, 숫자만 사용가능합니다.</span>');
  } else {
    idveri = true;
    $('.userid .warn').html('<span class="text-green">멋진 아이디네요!</span>');
  }
})


// 비밀번호
// .userpw input에 focusout 됐을 때 입력된 값이 0이라면(조건)
// .userpw warn에 내용을 작성(실행문)
$('.userpw input').focusout(function(){
  let userpw = $(this).val();
  // 8~20자 사이 영문 대소문자, 숫자 , 특수문자 포함
  let pwExp = /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/

  if(userpw.length == 0) {
    $('.userpw .warn').html('<span class="text-red">필수 정보입니다.</span>');
    $('.userpw .inputbox span').empty();
    $('.userpw .inputbox img').attr('src', './images/m_icon_pw_step_01.png');
  } else if(!pwExp.test(userpw)) {
    $('.userpw .warn').html('<span class="text-red">8~20자 영문 대 소문자, 숫자, 특수문자를 사용하세요.</span>');
    $('.userpw .inputbox p').html('<span class="text-red">사용불가</span>');
    $('.userpw .inputbox img').attr('src', './images/m_icon_pw_step_10.png');
  } else {
    pwveri = true;
    $('.userpw .warn').empty();
    $('.userpw .inputbox p').html('<span class="text-green">안전</span>');
    $('.userpw .inputbox img').attr('src', './images/m_icon_pw_step_04.png');
  }
})


// 비밀번호 재확인
// .userpw-chk input에 focusout 됐을 때 입력된 값이 0이라면(조건)
// .userpw-chk .warn에 빨간색 글자로 필수 정보입니다. (실행문1)
// 우측 아이콘 이미지를 원래대로 변경 (실행문2)

// .userpw input값이랑 .userpw-chk input값이 같은가?(조건2)
// pwchkveri에 true
// .warn에 뜨는 경고메세지 화면에서 사라지게 한다.
// 우측 아이콘 이미지를 바꿔준다.

// 그렇지 않다면 else (0이 아니고, 일치하지 않을 때)
// .userpw-chk .warn에 비밀번호가 일치하지 않습니다. (text-red)
// 우측 아이콘 이미지를 원래대로 변경(02)
$('.userpw-chk input'). focusout(function(){
  let userpwChk = $(this).val();

  if(userpwChk.length == 0) {
    $('.userpw-chk .warn').html('<span class="text-red">필수 정보입니다.</span>');
    $('.userpw-chk .inputbox img').attr('src', './images/m_icon_pw_step_02.png');
  } else if(userpwChk == $('.userpw input').val()) {
    pwchkveri = true;
    $('.userpw-chk .warn').empty();
    $('.userpw-chk .inputbox img').attr('src', './images/m_icon_pw_step_07.png');
  } else {
    $('.userpw-chk .warn').html('<span class="text-red">비밀번호가 일치하지 않습니다.</span>')
    $('.userpw-chk .inputbox img').attr('src', './images/m_icon_pw_step_02.png');
  }
})