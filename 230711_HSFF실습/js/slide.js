let buttons = document.querySelectorAll('.slide-btn li');
let slideList = document.querySelector('.slide-list');

// buttons라는 배열(li *3)을 forEach로 반복한다.
// forEach의 매개변수 1. 반복한 값 2. 인덱스 값
buttons.forEach(function(button, index){
  // 실행될 코드
  button.addEventListener('click', function(){
    // 0,1,2(index) * 100 => 0, -100, -200
    // 두번째 이미지 : -1 * 100 + 'vw' => -100vw
    let translateValue = -index * 100 + 'vw';
    slideList.style.transform = 'translateX(' + translateValue + ')';
    // slideList.style.transform = `translateX(${translateValue})`
    
    // buttons라는 배열 안에 모든 요소한테 active class remove
    buttons.forEach(function(otherBtn){
      otherBtn.classList.remove('active');
    })

    // click된 요소한테만 active class add
    button.classList.add('active');
  })
})