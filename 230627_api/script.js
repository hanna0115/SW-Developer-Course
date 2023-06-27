// 동기 - 순서대로 실행
// 예) 1번줄부터 마지막 줄까지 실행

// 비동기 - 자신만의 실행순서를 갖고 있음
// 예) 서버에서 오는 데이터, 거리에 따라 전송속도가 달라 대기 시간이 필요함

// // promise 안에 약속(promise)을 담은 상태
// // promise는 비동기 처리 -> 동기처럼 순서를 기다리기 위해서
// let promise = new Promise ((resolve, reject) => {
//   setTimeout(() => {
//     resolve('응답을 받았습니다')
//   }, 2000);
// })

// // promise -> then을 통해 데이터를 받아오거나, catch로 에러을 받아온다.
// promise.then(result => console.log(result)).catch(reject =>console(reject))

// let posts = [];
const app = document.getElementById('app')

// // fetch - 서버로부터 데이터를 받아올 때 사용하는 API
let todo = fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
todo
.then(response => response.json())
.then(json => {
  json.forEach(item => {
    // // user의 name, email 주소 출력
    // const p = document.createElement('p')
    // const h2 = document.createElement('h2')
    // console.log(item)
    // h2.textContent = item.name
    // p.textContent= item.email
    // app.appendChild(h2)
    // app.appendChild(p)
    console.log(json)
    json.forEach(imageData => {
      const img = document.createElement('img')
      img.src = imageData.url
      app.appendChild(img)
    })
  })
})
// console.log(posts)


// // 이렇게 하면 안나옴. 데이터를 가져오기 전에 이게 실행되어 아무것도 나오지 않음. -> 비동기 때문
// posts.forEach(post => {
//   console.log(post)
// })


