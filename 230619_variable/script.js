// // id = app에 text 넣기
// var text = "text 넣기"
// var app = document.getElementById('app')

// //method에 따라 쓰는 것 달라짐
// app.innerHTML
// app.innerText
// app.textContent = text; // text 넣기 라고 나옴

// const // 변하지 않는 값
// let // 변하는 값


// [버튼을 눌렀을 때, 값이 증가한다.]
// 1. 버튼 변수 저장
const btnInc = document.getElementById('increase')
const btnDec = document.getElementById('decrease')
// console.log(btnInc)
// 2. content에 id elemtnt 변수 저장(content에 content 저장)
const content = document.getElementById('content')
// console.log(content)
// 초기화된 숫자값
let originNumber = 0

// // btnInc 눌렀을 때 숫자 증가
// btnInc.addEventListener('click', function(){
//   originNumber = originNumber + 1;
//   content.textContent = originNumber
// })

// // btnDec 눌렀을 때 숫자 감소
// btnDec.addEventListener('click', function(){
//   originNumber = originNumber - 1;
//   content.textContent = originNumber
// })


// const func = function(){} // es5
// const func2 = () => {}
// // funtion(){}을 () => {} 이렇게 쓸 수 있음
// =>(fat arrow)

// // // [코드 개선 1: 중복되는 코드 함수로 줄이기]
// // btnInc 눌렀을 때 숫자 증가
// btnInc.addEventListener('click', () => {
//   calculate(originNumber, content, true)
// })

// // btnDec 눌렀을 때 숫자 감소
// btnDec.addEventListener('click', () => {
//   calculate(originNumber, content, false)
// })

// // 함수정의
// function calculate(number, content, check){
//   if(check === true){
//     number = number + 1;
//   }else{
//     number = number - 1;
//   }
//   content.textContent = number
//   return originNumber = number
// }

// [코드 개선 2: -값 나오지 않게, 1000씩 증가 및 감소]
// btnInc 눌렀을 때 숫자 증가
btnInc.addEventListener('click', () => {
  calculate(originNumber, content, true)
})

// btnDec 눌렀을 때 숫자 감소
btnDec.addEventListener('click', () => {
  calculate(originNumber, content, false)
})
const money = 1000
// 함수정의
// function calculate(number, content, check){  // 아래와 같음
  const calculate = (number, content, check) => {
  if(check === true){
    number = number + money;
  }else{
    if(number > 0){
      number = number - money;
    }
  }
  content.textContent = number
  return originNumber = number
}
