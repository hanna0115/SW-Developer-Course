// 상수, 변수
// 기존의 자바스크립트를 ES5
// ES6, ES7, ES2019 ... => ESNEXT

// ES5, var = Variable
// var name = '철수'
// console.log(name)

// ES6, let/const
// let : 변화하는 내용을 넣을 때 쓰는 변수선언법, 변경가능
// const = constant(상수), 변화하지 않는 내용을 담을 때 씀
let name = '철수'
name = '영희'
console.log(name) // 영희

const myName = '지우'
// myName = '피카츄'
console.log(myName) // error: const는 변할 수 없음

// 함수
// ES
function multiply (number){
  return number * 2;
}
console.log(multiply(2))

// ES6 화살표 함수
const multiply2 = (number) => {
  return number * 2
}
console.log(multiply2(3))

// 화살표에서 매개변수가 하나일 때만 가능한 방법
const multiply3 = number => number * 2
console.log(multiply3(5))


// Class 객체지향프로그래밍
// ES6부터 도입된 개념

class Pokemon {
  constructor() {
    this.PokemonName = '피카츄'
  }
  showPokemonName() {
    // 포켓몬 이름을 출력해주는 메소드
    console.log(this.PokemonName)
  }
}

class Trainer extends Pokemon{
  // 초기화, trainerName 기본값 = '지우'
  constructor(trainerName = '지우') {
    super()
    this.name = trainerName
  }
  // trainer 이름 출력하는 메소드
  showTrainerName (){
    console.log(this.name)
  }
}

const trainer = new Trainer('웅이')
// 클래스.name 재할당
// trainer.name = '피카츄'
// console.log(trainer.name) // 피카츄(가장 마지막에 할당한 것)
trainer.showTrainerName()
trainer.showPokemonName()

