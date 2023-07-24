// AOS Animate On Scroll

// 1. 유저가 스크롤을 얼마나 내렸는지 파악
// window : 현재 html 페이지 (document랑 같은 개념)
// Scroll 이벤트에는 관습적으로 window를 부착한다.
window.addEventListener('scroll', function(){
  // 현재 페이지에서 얼마나 스크롤 됐는지 px단위 : scrollY
  // 세로 스크롤 : scrollY / 가로 스크롤 : scrollX
  // console.log(window.scrollY + 'px');

  // 강제로 스크롤바를 특정 위치로 이동 => window.scrollTo(x, y)
  // this.window.scrollTo(0, 800);

  // 현재 페이지에서 100px 이상 스크롤 됐을 때 nav 태그의 배경색 변경
  
  if(100 <= window.scrollY){
    document.querySelector('nav').style.backgroundColor = '#fff';
  } else {
    document.querySelector('nav').style.backgroundColor = '#ccc';
  }
})