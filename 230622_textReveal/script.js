const title = document.getElementById('title')
// console.log(title.textContent)
// console.log(title.innerText)

// toggle 사용 한가지만 사용할 때 사용하기 좋음
// title.addEventListener('click', () => {
//   title.classList.toggle('active')
// })

// 매개변수 -> 구분자
const chars = title.innerText.split('')

// 1. html에 있는 title 안의 (원래 있던) 문자열 삭제(다음 forEach문에서 생성될거니까)
title.innerText = '';

// 2. span 태그에 담아서 title 안에 자바스크립트로 생성한 문자열 삽입
chars.forEach((char, index) => {
  // span element 생성
  const span = document.createElement('span')
  // class 'char' 추가
  span.classList.add('char')
  // 생성된 span 태그에 char 문자 삽입
  span.textContent = char
  // title에 자식요소로 문자가 담긴 span 태그 삽입
  title.appendChild(span)
  // console.log(span)

  setTimeout(() => {
    span.classList.add('active')
  }, 200 * index)
})

// [비동기함수 setTimeout]
// setTimeout은 순차적으로 실행되는 것이 아니라
// 자신이 갖고 있는 timer에 맞게 실행 타이밍을 가져간다.
// setTimeout(() => {console.log('첫번째 setTimeout')}, 500) // 2번
// setTimeout(() => {console.log('두번째 setTimeout')}, 800) // 3번
// setTimeout(() => {console.log('세번째 setTimeout')}, 100) // 1번 순으로 콘솔 찍힘