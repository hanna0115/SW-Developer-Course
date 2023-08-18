let time = new Date();
let hours = time.getHours();

// .phone-box span 1초마다 시간 바뀌기
setInterval(function(){
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
}, 1000)


// 시간에 맞춰서 배경 이미지, 버튼 활성화
let btnList = document.querySelectorAll('.btn-box button');
let back = document.querySelector('.wrapper');

if(hours >= 6 && hours < 12) {
  back.classList.add('morning');
  btnList[0].classList.add('on');
} else if(hours >= 12 && hours < 16) {
  back.classList.add('afternoon');
  btnList[1].classList.add('on');
} else if(hours >= 16 && hours < 20) {
  back.classList.add('evening');
  btnList[2].classList.add('on');
} else {
  back.classList.add('night');
  btnList[3].classList.add('on');
}


// 버튼 클릭시 배경 이미지 변경, on class add & remove
btnList.forEach(function(item){
  let backTxt = item.innerHTML;
  
  item.addEventListener('click', function(e){
    btnList.forEach(function(item){
      item.classList.remove('on')
      back.className = 'wrapper';
    })

    item.classList.add('on');
    back.classList.add(backTxt);

    if(backTxt == 'night') {
      document.querySelector('.logo img').src = './images/logo_w.png';
    } else {
      document.querySelector('.logo img').src = './images/logo_b.png';
    }
  })
})