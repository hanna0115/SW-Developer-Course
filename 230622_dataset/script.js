const bar = document.querySelector('.bar')
const number = document.querySelector('.number')

// data-number, dataset.number
const dataNumber = bar.dataset.number;
// number에 숫자 변경/삽입
number.textContent = dataNumber;
// bar 그래프의 width 값으로 퍼센트 표현
bar.style.width = dataNumber + '%';

console.log(dataNumber)