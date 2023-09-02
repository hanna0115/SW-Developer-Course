// express로 서버 만들기
const express = require('express');
const app = express();

// 7000번 포트 열기
app.listen(7000, function(){
  console.log('7000번 포트');
})

// 폴더 내 모든 정적 파일 제공
app.use(express.static(__dirname));

// 메인 경로 : index.html
app.get('/', function(requests, response){
  response.sendFile(__dirname + '/index.html');
})

// body-parser(요청 데이터 해석을 도와주는 라이브러리) 연결
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

// MongoDB 연결
const MongoClient = require('mongodb').MongoClient;

// 데이터 저장할 변수
let db;

MongoClient.connect('mongodb+srv://admin:wearegoing@cluster0.xq3uv5b.mongodb.net/?retryWrites=true&w=majority', function(error, client){
  if(error) {
    return console.log(error);
  }

  db = client.db('test');

  app.listen('7070', function(){
    console.log('seccess')
  } )
})


let url = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=785&MobileOS=ect&MobileApp=DDju&_type=json&areaCode=3&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D";

fetch(url)
.then((res) => res.json())
  .then((myJson) => {
    let daejeon = myJson.response.body.items.item;
    daejeon.forEach((item, index) => {
      db.collection('api').insertOne({'contentid' : item[index].contentid,
      'title' : item[index].title, 'contenttypeid' : item[index].contenttypeid,
      'sigungucode' : item[index].sigungucode, 'img' : item[index].firstimage,
      'addr1' : item[index].addr1, 'addr2' : item[index].addr2, 'tel' : item[index].tel,
      'zipcode' : item[index].zipcode, 'mapx' : item[index].mapx, 'mapy' : item[index].mapy,
      'createdtime' : item[index].createdtime}, function(error, result){
        console.log('db에 저장완료')
      })
    });
    })


// // api 가져오는 함수
// function api(url){
//   document.querySelector('.place-list').innerHTML = '';
  
//   fetch(url)
//   .then((res) => res.json())
//   .then((myJson) => {
//     let daejeon = myJson.response.body.items.item;
//     daejeon.forEach((item, index) => {
//       let placeItem = `
//       <div class="place-item">
//       <img src = "${item.firstimage}" alt = "${item.title}">
//       <div class="text-box">
//       <h3>${item.title}</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, repellendus.</p>
//               <ul class="keywords-list">
//                 <li>#키워드</li>
//                 <li>#키워드</li>
//                 <li>#키워드</li>
//                 <li>#키워드</li>
//               </ul>
//             </div>
//           </div>
//       `

//       document.querySelector('.place-list').insertAdjacentHTML('beforeend' , placeItem)
//     });
//     })
// }

// api(url);


// // '구'를 선택했을 때 해당하는 '구'의 api 가져오는 이벤트 추가
// document.getElementById('district').addEventListener('change', function(){
//   let sigunguCode = this.value;

//   url = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?MobileOS=ect&MobileApp=DDju&_type=json&areaCode=3" + sigunguCode + "&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D";
  
//   api(url);
// })