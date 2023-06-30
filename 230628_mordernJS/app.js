// // 기존 promise 사용
// const promise = new Promise((resolvem, reject) => {
//   setTimeout(() => {
//     console.log('3초뒤')
//   }, 3000)
// })
// promise.then(result => result).catch(error => console.log(error))

// // 위에 방법 너무 길어져서 더 간단하게 만듦.(asynd, await 나오면 데이터 올 때까지 기다림)
// const promise = async () => {
  // try 시도하고 안되면 catch 값 내보내기(if문 처럼)
//   try{
//     const getData = await fetch('주소')
//     const result = await getData.json()
//   } catch (error) {
//     console.log(error)
//   }
// }

/**
 * import(가져오기) / export(내보내기)
 */

// // multiply
// // 매개변수 number를 받아서 * 2 한 값을 반환
// // 곱하기 함수를 파일로 만들어서 export 시키고,
// // app.js로 불러와서 실행하고 결과 보기
// import add from './add.js'
// import multiply from './multiply.js'

// console.log(add(2)) // 4
// console.log(multiply(3)) // 6


// // 두개 이상 꺼내올 때 {} 사용(export defalut가 아닐 때)
// import {add, multiply} from './util.js'
// console.log(add(2)) // 4
// console.log(multiply(3)) // 6


// // as : add라는 함수 plus로 이름 바꾸고 싶을 때 사용
// import {add as plus} from './util.js'
// console.log(plus(2)) // 4


// * as calc : 전체 함수를 calc라는 이름을 가진 상자에 담겠다. 
import * as calc from './util.js'
// calc에 있는 add 함수에 2 넣기
console.log(calc.add(2)) // 4
console.log(calc.multiply(3)) // 6

// util.js에 함수 추가
// 함수 - double을 export
// 매개변수 -Number
// double이 하는 일은 매개변수 number * number
// app.js에 가져다가 결과를 console.log()로 보여주기
console.log(calc.double(3)) // 9