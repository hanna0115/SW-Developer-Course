let now = new Date();
let hr =  now.getHours();

setInterval(function(){
  let now = new Date();
  let hr = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  if(hr >= 10) {
      hnum = hr;
    } else {
      // 그렇지 않을 때(한자리 수)
      hnum = '0' + hr;
    }
  
    if(min >= 10) {
      mnum = min;
    } else {
      mnum = '0' + min;
    }
  
    if(sec >= 10) {
      snum = sec;
    } else {
      snum = '0' + sec;
    }

    $('.phone-time').html(`${hnum} : ${mnum} : ${snum}`);
})


// 시간에 맞춰서 배경 이미지, 버튼 활성화
if(hr >= 6 && hr < 12) {
  $('#wrapper').addClass('morning');
  $('.btn-list li').eq(0).addClass('on');
} else if(hr >= 12 && hr < 16) {
  $('#wrapper').addClass('afternoon');
  $('.btn-list li').eq(1).addClass('on');
} else if(hr >= 16 && hr < 20) {
  $('#wrapper').addClass('evening');
  $('.btn-list li').eq(2).addClass('on');
} else {
  $('#wrapper').addClass('night');
  $('.btn-list li').eq(3).addClass('on');
}


// 버튼 클릭시 배경 이미지 변경, on class add & remove
$('.btn-list li').on('click', function(e){
  let backTxt = $(this).find('a').text();
  e.preventDefault();

  $('.btn-list li').removeClass('on');
  $(this).addClass('on');
  
  $('#wrapper').removeClass();
  $('#wrapper').addClass(backTxt);
})