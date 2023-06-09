// 변수 선언 : var, let, const
// javascript는 변수명을 지을 때 카멜 표기법을 사용한다.
// getIlemtsByClassName, getElementsById 앞에 . # 붙지 않는다.
// const gnbIconBtn = document.getElementsByClassName('클래스명');
// const gnbIconBtn = document.getElementById('클래스명');
const gnbIconBtn = document.querySelector('.gnb-icon-btn');
const sidebar = document.querySelector('.sidebar');
const sidevarOverlay = document.querySelector('.overlay');
console.log(gnbIconBtn,sidebar,sidevarOverlay);

// function 함수명() {
//   // 실행할 코드
// }

// function openSidebar() {
//   // 우리가 하고 싶은 내용
//   // 1. gnbIconBtn 클릭 했을 때, sidebar, sidevarOverlay한테 is-active 클래스 추가

//   // DOM 메소드를 이용해서 쉽게 클래스를 추가 및 제거할 수 있다.
//   // DOM이란 자바스크립트 같은 스크립팅 언어가 우리가 만들어 놓은 웹 페이지에 접근해서
//   // 그 요소를 쉽게 조작하는 역할을 한다.
//   // 현재 웹 브라우저에서 DOM을 조작하는 언어는 javascript가 유일하다.
//   // DOM 데이터 타입 (메소드, 프로퍼티, 이벤트 리스너, 스타일 등)
//   sidebar.classList.add('is-active');
//   sidevarOverlay.classList.add('is-active');
// }

// // 내가 gnbIconBtn한테 이벤트를 하나 추가할건데, => click 이벤트를 추가하고
// // openSidebar 이 함수를 실행시켜라
// gnbIconBtn.addEventListener('click', openSidebar);

// function closeSidebar() {
//   // is-active 클래스 제거
//   sidebar.classList.remove('is-active');
//   sidevarOverlay.classList.remove('is-active');
// }

// sidevarOverlay.addEventListener('click', closeSidebar);


// 콜백함수 : 함수를 활용하는 하나의 방식
// 변수의 유효범위(scope), 동기 / 비동기 처리
// 코드가 작성된 순서대로 동작(가독성, 재사용성이 좋다)
// 함수를 호출하는 시점이나, 코드가 동작하는 순서가 바뀐다.

// gnbIconBtn 클릭 했을 때 실행할 함수
gnbIconBtn.addEventListener('click', function(){
  // 실행할 코드
  sidebar.classList.add('is-active')
  sidevarOverlay.classList.add('is-active')
})

sidevarOverlay.addEventListener('click', function(){
  sidebar.classList.remove('is-active')
  sidevarOverlay.classList.remove('is-active')
})