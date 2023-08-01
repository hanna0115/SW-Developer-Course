// id
$('.user-id input').focusout(function(){
  $('.user-id p').css('visibility', 'visible')
  let idTxt = $(this).val().length;

  if(idTxt == 0) {
    $('.user-id p').text('필수 정보입니다.');
    $('.user-id p').css('color', 'red');
  } else if(idTxt<=5 || idTxt>=20) {
    $('.user-id p').text('5~20자의 영문소문자만 사용가능합니다.');
    $('.user-id p').css('color', 'red');
  } else {
    $('.user-id p').text('멋진 아이디네요!');
    $('.user-id p').css('color', '#03c75a');
  }
})


// pw
$('.pw-chk input').focusout(function(){
  $('.pw-chk p').css('visibility', 'visible')
  let pwTxt = $(this).val().length;

  if(pwTxt == 0) {
    $('.pw-chk p').text('필수 정보입니다.');
    $('.pw-chk p').css('color', 'red');
  } else if(pwTxt<=8 || pwTxt>=16) {
    $('.pw-chk p').text('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
    $('.pw-chk p').css('color', 'red');
    $('.pw-chk span').css({'visibility':'visible', 'color':'red'});
    $('.pw-chk .inputbox img').attr('src', './images/m_icon_pw_step_10.png')
  } else {
    $('.pw-chk p').css('visibility', 'hidden')
    $('.pw-chk span').text('안전')
    $('.pw-chk span').css({'visibility':'visible', 'color':'#03c75a'});
    $('.pw-chk .inputbox img').attr('src', './images/m_icon_pw_step_04.png')
  }
})

// pw-rechk
$('.pw-rechk input').focusout(function(){
  let pwChk = $('.pw-chk input').val();
  let pwRechk = $('.pw-rechk input').val();
  let pwRetxt = $(this).val().length;

  if(pwRetxt == 0) {
    $('.pw-rechk p').text('필수 정보입니다.');
    $('.pw-rechk p').css({'visibility':'visible', 'color':'red'});
  } else if(pwChk != pwRechk) {
    $('.pw-rechk p').text('비밀번호가 일치하지 않습니다.');
    $('.pw-rechk p').css({'visibility':'visible', 'color':'red'});
  } else {
    $('.pw-rechk p').css('visibility', 'hidden');
    $('.pw-rechk .inputbox img').attr('src', './images/m_icon_pw_step_07.png')
  }
})


// 이름
$('.user-name input').focusout(function(){
  let nameTxt = $(this).val().length;

  if(nameTxt == 0) {
    $('.user-name p').css({'visibility':'visible', 'color':'red'});
  } else {
    $('.user-name p').css('visibility', 'hidden'); 
  }
})

// 생년월일
$('.user-bir input').focusout(function(){
  let year = $('.user-bir .year').val().length;
  let month = $('.user-bir option:selected').val();
  let day = $('.user-bir .day').val().length;

  if(year == 0) {
    $('.user-bir p').text('태어난 년도 4자리를 정확하게 입력하세요.');
    $('.user-bir p').css({'visibility':'visible', 'color':'red'});
  } else if (month == 0) {
    $('.user-bir p').text('태어난 월을 선택하세요.');
    $('.user-bir p').css({'visibility':'visible', 'color':'red'});
  } else if(day == 0) {
    $('.user-bir p').text('태어난 일(날짜) 2자리를 정확하게 입력하세요.');
    $('.user-bir p').css({'visibility':'visible', 'color':'red'});
  }
})


// 성별
$('.gender-select').on('click', function(){
  $('.user-gender span').removeClass('radiochk');
  $('.user-gender input').removeAttr('checked');

  $(this).children('span').addClass('radiochk');
  $(this).children('input').attr('checked', true)
})


// 본인 확인 이메일(선택)
$('.user-email input').focusout(function(){
  let emailTxt = $(this).val();
  let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if(emailTxt == 0) {
    $('.user-email p').css('visibility', 'hidden');
  } else if(!regExp.test(emailTxt)) {
    $('.user-email p').css({'visibility':'visible', 'color':'red'});
  } else {
    $('.user-email p').css('visibility', 'hidden');
  }
})


// 휴대전화
$('.user-phone .phone-num input').focusout(function(){
  let numTxt = $(this).val();

  if(numTxt == 0) {
    $('.user-phone p').css({'visibility':'visible', 'color':'red'});
  } else {
    // 자바스크립트 정규표현식으로 입력값 체크
    let verifi = verifi.replace(/[^0-9]/g, '');
  }
})