const app = document.getElementById('app')
const list = ['a', 'b', 'c', 'd', 'e']

// [forEach문]
list.forEach((item, index) => {
  // 1. p 태그 생성
  const p = document.createElement('p')
  // 2. p 태그 안에 item 문자열 삽입
  p.textContent = item;
  // 3. app 안에 p 삽입
  app.appendChild(p);
})

// [for문]
for(let i=0; i<list.length; i++){
  const p = document.createElement('p')
  p.textContent = list[i];
  app.appendChild(p);
}