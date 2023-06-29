export default function Flex(props) {
  return(
    <div style={{display:"flex", flexDirection:"column"}}>
      {props.children}
    </div>
  )
}

// 같은 결과
// export default function Flex({children}) {
//   return(
//     <div style={{display:"flex", flexDirection:"column"}}>
//       {children}
//     </div>
//   )
// }