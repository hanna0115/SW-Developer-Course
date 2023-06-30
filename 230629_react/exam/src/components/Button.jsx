// function Button(props) {
//   return (
//     <button style={{color:props.color, fontSize:props.size}}>{props.title}</button>
//   )
// }
// 아래 두 객체는 같은 내용, 다른 표현 방법이다.
// {
//   name: name,
//   color: color,
//   size: size
// }
// --------------------------
// { name, color, size }
// --------------------------

import style from"./Button.module.css"
export default function Button({name, primary, secondary}) {
  // 3항 연산자 - if문 간단하게 (조건 ? 참일 때 실행할 것 : 거짓일 때 실행할 것)
  const isPrimary = primary ? style.primary : ''
  const isSecondary = secondary ? style.secondary : ''
  // if(primary) {
  //   return style.primary
  // }else {
  //   return ''
  // }
  return (
    <button className={[style.button, isPrimary, isSecondary].join(" ")}>{name}</button>
  )
}