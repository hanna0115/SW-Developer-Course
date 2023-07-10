const buttons = document.querySelectorAll('.btn-group button');
const slideList = document.querySelector('.slide-list');

buttons.forEach(function(btn, index){
  btn.addEventListener('click', () => {
    slideList.style.transform = `translateX(-${index}00vw)`;

    // // buttons라는 배열을 한 번 더 돌면서 모든 버튼이 가지고 있는 active class remove
    // buttons.forEach(otherBtn => {
    //   otherBtn.classList.remove('active');
    // })
    // 클릭된 버튼에만 active class add
    btn.classList.add('active');

    // 조건문
    // 현재 클릭되어 있는 버튼이 아닐 때 && active라는 class를 포함하고 있다면 조건이 true일 때 active class remove
    buttons.forEach(function(otherBtn){
      if(otherBtn !== btn && otherBtn.classList.contains('active')){
        otherBtn.classList.remove('active');
      }
    })
  })
})