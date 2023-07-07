const slideList = document.querySelector('.slide-list');
const btn = document.querySelectorAll('.btn')
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
// console.log(btn2);

btn1.addEventListener('click', () => {
  slideList.style.transform = "translateX(0vw)"
})
btn2.addEventListener('click', () => {
  slideList.style.transform = "translateX(-100vw)"
})
btn3.addEventListener('click', () => {
  slideList.style.transform = "translateX(-200vw)"
})

