const slideList = document.querySelector('.slide-list');
const btn = document.querySelectorAll('.btn')
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
// console.log(btn2);

// click 이벤트 추가하는 방법
// 1. HTML onclick="함수()"
// 2. 함수 생성 후, 이벤트대상.addEventListener('click', 함수)
// 3. 이벤트대상.addEventListener('click', function(){}) 콜백

btn1.addEventListener('click', () => {
  slideList.style.transform = "translateX(0vw)"
})
// function BTN1(){
//   slideList.style.transform = 'translateX(0)'
// }
// btn1.addEventListener('click', BTN1())

btn2.addEventListener('click', () => {
  slideList.style.transform = "translateX(-100vw)"
})
btn3.addEventListener('click', () => {
  slideList.style.transform = "translateX(-200vw)"
})