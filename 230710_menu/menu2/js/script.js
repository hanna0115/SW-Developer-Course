// find(): 자식 및 하위 태그 찾을 때
// children(): 자식 요소만 찾을 때

// index , eq()

const nav = document.querySelector('nav');
const main = document.querySelector('.main-menu-list');
const sub = document.querySelector('.sub-menu-wrapper');


main.addEventListener('mouseover', function(){
  sub.classList.add('active')
})

nav.addEventListener('mouseleave', function(){
  sub.classList.remove('active')
})


// 서브메뉴 인덱스 값 찾아서 같은 인덱스 값 가지고 있는 메인메뉴에게 .on 클래스 주기
