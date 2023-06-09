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
    // extends 쓰면 꼭 써줘야함.
    super()
    this.name = trainerName
  }
  // trainer 이름 출력하는 메소드
  showTrainerName (){
    console.log(this.name)
  }
  another(){
    // 내부 메소드를 끌어다 쓰는 방법
    this.showTrainerName()
  }
}

const trainer = new Trainer('웅이')
// 클래스.name 재할당
// trainer.name = '피카츄'
// console.log(trainer.name) // 피카츄(가장 마지막에 할당한 것)
trainer.showTrainerName() // 웅이
trainer.showPokemonName() // 피카츄
trainer.another() // 웅이


// [스프레드 연산자(...)] : 배열, 객체에서 사용 가능, ...(점 세개 꼭 지키기)
// 스프레드 연산자 - 배열에서 사용
const pokemon = ['피카츄', '고라파덕', '이상해씨']
// 스프레드 연산자 사용해 파이리 추가
const newPoke = [...pokemon, '파이리']
// 기존 방법
// const newPoke = []
// pokemons.forEach(pokemon => newPoke.push(pokemon))
// newPoke.push('파이리')
console.log(newPoke)

const numbers = [1, 2, 3]
// 4,5를 추가해서 newnumbers 배열 새로 생성
const newnumbers = [...numbers, 4, 5]
console.log(newnumbers)

// 스프레드 연산자 - 객체에서 사용
const pokemonTrainer = {
  name: '지우',
  pokemon: '피카츄'
}
const newTrainer = {
  ...pokemonTrainer,
  age: 20
}
console.log(newTrainer)
// {
//   name: '지우',
//   pokemon: '피카츄'
//   age: 20
// }

const char = {
  enLength: 26,
}
// char의 내용을 복사해서
// aopahbet : "characters" 속성 추가하기
const num = {
  ...char,
  alpabet: "characters"
}
console.log(num)


// [rest 연산자]
// args = arguments(인수)

// 매개변수 이름 다르게 설정해도 가능
const filterNumber = (...args) => {
  return numbers.filter(number => {
    // 조건을 두가지 걸러낼 때
    // OR
    if(number === 1 || number === 3){
      return number
    }
  })
}
console.log(filterNumber(1,3,6,7,8)) // [1, 3]

// filterAlphabet
// a, b, c, d 인수들을 필터링 해서
// alphabet === 'a'만 배열로 결과를 만들기
const filterAlphabet = (...args) => {
  return args.filter(alphabet => alphabet === 'a')
}
console.log(filterAlphabet('a','b','c','d'))
// ['a'] : filter 메소드는 결과는 배열로 만들어 준다.

// const pokemon = ['피카츄', '고라파덕', '이상해씨']
// 변수명 : filterPokemon
// 조건 : '피카츄'만 출력
// 결과 : ['피카츄']
const filterPokemon = (...args) => {
  return args.filter(mon => mon === '피카츄')
}
console.log(filterPokemon(...pokemon))


// [구조분해 :  Destructuring]
// structure = 구조
// de = 분해

// 배열 구조분해
const [a, b] = [1, 2]
console.log(a) // 1
console.log(b) // 2

// const pokemon = ['피카츄', '고라파덕', '이상해씨']
// c, d, e 변수 3개에 구조분해 해서 담기
// console.log(c,d,e) 결과 출력
const [c, d, e] = pokemon
console.log(c,d,e)
// const newMons = [pokemon, '파이리']
// console.log(newMons)
// // [['피카츄', '고라파덕', '이상해씨'], '파이리'] -> 배열 전체 가져옴

// const [first, second] = pokemon
// console.log(first,second) // 피카츄 고라파덕

// // 공백으로 처리한 부분은 skip(건너뛴다)
// const [first, ,second] = pokemon
// console.log(first,second) // 피카츄 이상해씨

// const [first, , ,second] = pokemon
// console.log(first,second) // 피카츄 undifined

// 객체 구조분해
const { nickname, age } = {
  nickname : '홍길동',
  age : 16
}
console.log(nickname, age)


// [map 배열 메소드]
// forEach / Map의 차이
// map은 결과를 새로운 배열로 반환해준다.
// const numbers = [1, 2, 3]
const doubleNumbers = numbers.map(num => num * 2)
console.log(doubleNumbers) // [2, 4, 6]


// const pokemon = ['피카츄', '고라파덕', '이상해씨']
// map을 활용해서 문자열 더하기
// '너로 정했다'
// 변수명 namedPokemon
const namedPokemon = pokemon.map(item => item + ' 너로 정했다')
console.log(namedPokemon)