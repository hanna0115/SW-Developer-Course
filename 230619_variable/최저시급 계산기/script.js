// 최저시급 DOM
const salaryElem = document.getElementById('salary');

// 최저시급 content 값
let salary = parseInt(salaryElem.textContent);

// 결과 DOM
const resultElem = document.getElementById('result');

// 결과 content 값
let result = resultElem.textContent;
// console.log(typeof salary) // salary의 타입 알아보기

// 계산버튼
const actionElem = document.getElementById('action')

actionElem.addEventListener('click', () => {
  // 근무시간
  const timeElem = document.getElementById('time')
  
  // 숫자일 경우, +를 붙이면 string -> number 형 변환
  // parseInt(value) string -> number 형 변환
  let timeValue = +timeElem.value
  console.log(timeValue)

  //결과 계산 = 근무시간 x 최저시급
  result = timeValue * salary;
  console.log(result)

  resultElem.textContent = result
})
// console.log(actionElem)
// console.log(result)

// ES6+, ESNEXT
const func = (number, text) => console.log(number, text)

// var : 예기치 못한 상황을 유발하기 때문에,
// 숙련되지 못한 경우엔 오류가 발생할 수 있어
// 점차 사용하지 않는 추세

// let, const
// let : 변할 수 있는 값, 내용
// const : 변할 수 없는 것들.

// console.log() : 내가 가져온 값을 실질적으로 제대로 불러오고 있는지 확인
// console.log(typeof 변수명) // number, string, boolean 등 타입 체크
// 타입 자료형 - 자료의 형태 - number, string, boolean, object ...

// addEventListener : 이벤트를 청취하겠다. 관찰하겠다.
// 사용자가 특정 동작을 했다.
// addEventListener('click', function(){})
// mousemove, scroll, resize ... mouseover, mouseleave, moustenter.
// touch event