// .phone-box span 1초마다 시간 바뀌기
function nowTime(){
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  // 시, 분, 초가 한자리 수일 때 앞에 0 붙이기
  function addZero(num){
    if(num < 10){
      return '0' + num;
    } else {
      return num;
    }
  }

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  $('.phone-box span').text(`${hours} : ${minutes} : ${seconds}`);
}

setInterval(nowTime, 1000)

function nowPart(){
  let time = new Date();
  let hours = time.getHours();

  if(hours > 6 && hours < 11) {

  }
}



function partOfDay(part){
  document.querySelector('.wrapper').style.backgroundImage = "url('./images/bg_"+part+".jpg')";
  document.querySelector('.phone-img').src = './images/phone_'+part+'.png';
  document.querySelector('.phone-img').alt = part
}

document.querySelectorAll('.btn-box button').forEach(function(button){
  button.addEventListener('click', function(){
    document.querySelectorAll('.btn-box button').forEach(function(button){
      button.classList.remove('on')
    })
    button.classList.add('on')
  })

  if(this.classList.contains('afternoon')){
    partOfDay(afternoon);
  }
})

// $('.btn-box button').on('click', function(){
//   $('.btn-box button').removeClass('on');
//   $(this).addClass('on')

//   if($(this).hasClass('morning')){
//     $('.wrapper').css('background-image', "url('./images/bg_morning.jpg')");
//     $('.phone-img').attr('src', './images/phone_morning.png');
//     $('.phone-img').attr('alt', 'morning');
//   } else if($(this).hasClass('afternoon')){
//     // $('.wrapper').css('background-image', "url('./images/bg_afternoon.jpg')");
//     // $('.phone-img').attr('src', './images/phone_afternoon.png');
//     // $('.phone-img').attr('alt', 'afternoon');
//     partOfDay(afternoon)
//   } else if($(this).hasClass('evening')){
//     $('.wrapper').css('background-image', "url('./images/bg_evening.jpg')");
//     $('.phone-img').attr('src', './images/phone_evening.png');
//     $('.phone-img').attr('alt', 'evening');
//   } else if($(this).hasClass('night')){
//     $('.wrapper').css('background-image', "url('./images/bg_night.jpg')");
//     $('.phone-img').attr('src', './images/phone_night.png');
//     $('.phone-img').attr('alt', 'night');
//     $('.logo img').attr('src','./images/logo_w.png');
//     $('.main-txt p').css('color', '#666');
//     $('.gnb-item a, .main-txt span, phone-box span').css('color', '#fff');
//   }
// })
