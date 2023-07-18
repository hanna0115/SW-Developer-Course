// const xBtn = document.querySelector('.close-btn');
// const modal = document.querySelector('.modal');

// xBtn.addEventListener('click', function(){
//   modal.style.display = 'none';
// })

let popupBtn = document.querySelector('.close-btn button');

// javasctipt 기본함수
// n초 후에 코드 실행
// setTimeout : 파라미터를 두개 받음. 첫번째 - 콜백함수, 두번째 - ms 단위
// -> setTimeout(function(){}, 5000)

// popupBtn click 시 5초 후에 popup 창 사라지게
popupBtn.addEventListener('click', function(){
  setTimeout(function(){
    document.querySelector('.popup').style.display = 'none';
  }, 5000)
})

// 쿠키를 이용한 시간 설정으로 팝업창 일정시간 동안 보이지 않게 하기
// 사용자가 팝업창을 그냥 닫았는지, 하루 열지 않기에 체크를 하고 닫았는지 여부 확인
// setCookie00() : 함수를 호출할 경우 00시 기준으로 쿠키값 초기화
// setCookie24() : 함수를 호출할 경우 24시간 후에 쿠키값 초기화