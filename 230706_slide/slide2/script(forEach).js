const buttons = document.querySelectorAll('.btn-group button');
const slideList = document.querySelector('.slide-list');

buttons.forEach(function(btn, index){
  btn.addEventListener('click', () => {
    buttons.forEach(item => {item.classList.remove('active')})
    slideList.style.transform = `translateX(-${index}00vw)`;
    btn.classList.add('active');
  })
})