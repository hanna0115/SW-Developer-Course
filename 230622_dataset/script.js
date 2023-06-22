const container = document.querySelectorAll('.container')

container.forEach(item => {
  // item => 부모, container
  // container[0], container[1], container[2]
  // 부모에서 bar 찾기
  const bar = item.querySelector('.bar')
  // 부모에서 number 찾기
  const number = item.querySelector('.number')

  // data-number값에 접근할 때 -> dataset.number
  // bar.data-number -> 자바스크립트는 못 알아듣는다.
  // bar.data.number -> 자바스크립트가 알아듣는다.
  const dataNumber = bar.dataset.number;

  // number에 숫자 변경/삽입
  number.textContent = dataNumber;

  // bar 그래프의 width 값으로 퍼센트 표현
  bar.style.width = dataNumber + '%';
  // console.log(bar.dataset.number)
})



// 라이브러리 : chat.js