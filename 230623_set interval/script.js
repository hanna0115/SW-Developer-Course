const number = document.querySelector('.number')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
let index = 0;
// 1000 milliseconds => 1 second
let timerId;

startBtn.addEventListener('click', () => {
  index = 0;
  timerId = setInterval(() => {
    index++
    number.textContent = index;
    // console.log(index)
  }, 100)
})

stopBtn.addEventListener('click', () => {
  clearInterval(timerId)
})