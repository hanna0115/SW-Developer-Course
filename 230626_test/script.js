// // 1. 버튼을 변수에 담고
// // start, stop

// // 2. 버튼을 눌렀을 떄 그 안의 텍스트 내용을 console.log로 출력
// // addEventListener

// const start = document.getElementById('start')
// const stop = document.getElementById('stop')

// start.addEventListener('click', () => {
//   console.log(start.textContent)
// })

// stop.addEventListener('click', () => {
//   console.log(stop.textContent)
// })


// 1. title, plus, minus 변수 선언
// index 변수

// 2. addEventListener를 각각 버튼마다 이벤트를 걸어주고

// 3. plus를 눌렀을 때는 1px 씩 폰트 사이즈 증가
// title.style.fontSize = `${index}px`

// 4. minus 눌렀을 때는 1px 식 폰트 사이즈 감소
// title.style.fontSize = `${index}px`

const title = document.getElementById('title')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let index = 16;

plus.addEventListener('click', () => {
  index++
  console.log(index)
  title.style.fontSize = `${index}px`
})

minus.addEventListener('click', () => {
  index--
  console.log(index)
  title.style.fontSize = `${index}px`
})

// 5. change 버튼을 눌렀을 때마다 title의 컬러가 변하도록, active 클래스로 제어(추가/삭제)

const change = document.getElementById('change')

// change.addEventListener('click', () => {
//   title.classList.toggle('active')
// })

// if문 사용
change.addEventListener('click', () => {
  setTimeout(() => {
    if(title.classList.contains('active')){
      title.classList.remove('active')
      console.log('active 제거')
    }else{
      title.classList.add('active')
      console.log('active 추가')
    }
  }, 1000)
})