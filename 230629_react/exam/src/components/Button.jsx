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
export default function Button({name, color, size}) {
  return (
    <button style={{color:color, fontSize:size}}>{name}</button>
  )
}