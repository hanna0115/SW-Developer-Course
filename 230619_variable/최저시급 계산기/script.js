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
  let timeValue = timeElem.value
  console.log(timeValue)

  //결과 계산 = 근무시간 x 최저시급
  result = timeValue * salary;
  console.log(result)

  resultElem.textContent = result
})
// console.log(actionElem)
// console.log(result)