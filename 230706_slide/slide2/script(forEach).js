// forEach, parameter(매개변수)
// forEach method : Array(배열)에서 사용하는 메서드
// 배열 안의 값을 순차적으로 함수에게 전달
// 숫자 = [1, 2, 3, 4, 5]
// 숫자.forEach

let buttons = document.querySelectorAll('.btn-group button');

// forEach 파라미터
// 1. 배열을 반복한 값
// 2. 배열의 인덱스 값

// click 이벤트 추가 => 첫번째 매개변수(btn)
buttons.forEach(function(btn, index){
  btn.addEventListener('click', () => {
    let slideList = document.querySelector('.slide-list');
    let xValue = -index * 100 + 'vw';
    // slideList.style.transform = 'translateX(' + xValue + ')';
    slideList.style.transform = `translateX(${xValue})`;
    
    // slideList.style.transform = `translateX(-${index}00vw)`;
  })
})