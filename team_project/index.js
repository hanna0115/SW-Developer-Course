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
const { Cursor } = require('mongodb/lib/core');
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

// Mongodb에 데이터 넣기
// let url = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=785&MobileOS=ect&MobileApp=DDju&_type=json&areaCode=3&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D";

// fetch(url)
// .then((res) => res.json())
// .then((myJson) => {
//   let daejeon = myJson.response.body.items.item;
  // for(let i = 0; i < daejeon.length; i++) {
  //   db.collection('api').insert({_id : daejeon[i].contentid,
  //     'title' : daejeon[i].title, 'contenttypeid' : daejeon[i].contenttypeid,
  //     'sigungucode' : daejeon[i].sigungucode, 'img' : daejeon[i].firstimage,
  //     'addr1' : daejeon[i].addr1, 'addr2' : daejeon[i].addr2, 'tel' : daejeon[i].tel,
  //     'zipcode' : daejeon[i].zipcode, 'mapx' : daejeon[i].mapx, 'mapy' : daejeon[i].mapy,
  //     'createdtime' : daejeon[i].createdtime}, function(error, result){
  //     console.log('db에 저장완료!')
  //   })
  // }
// })



// Mongodb에서 데이터 가져와서 일치하는 id 값에 데이터 추가하기
// 개요, 홈페이지 주소
// app.get('/add', function(requests, response){
//   db.collection('api').find().forEach(function(item) {
//     // console.log(item._id)
//     let url = 'https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ect&MobileApp=DDju&_type=json&contentId=' + item._id + '&overviewYN=Y&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D';
//     fetch(url)
//     .then((res) => res.json())
//     .then((json) => {
//       let text = json.response.body.items.item;
      
//       db.collection('api').update({_id : item._id}, {$set : {'overview' : text[0].overview, 'hmpg' : text[0].hmpg}}, function(){
//         if(error) {
//           return console.log(error)
//         } 
//         console.log('db에 저장완료!')
//       })
//     })
//   })
// })

// 관광지 : 이용시간, 쉬는날
// app.get('/add', function(requests, response){
//   db.collection('api').find().forEach(function(item) {
//     // console.log(item._id)
//     let url = 'https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ect&MobileApp=DDju&_type=json&contentId=' + item._id + '&contentTypeId=39&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D';
//     fetch(url)
//     .then((res) => res.json())
//     .then((json) => {
//       let text = json.response.body.items.item;
//       text.forEach(function(item, index){
//         db.collection('api').update({_id : item.contentid},
//           {$set : {'opentime' : item[index].opentimefood, 'restdate' : item[index].restdatefood, 'infocenter' : item[index].infocenterfood}}, function(error, result){
//           if(error) {
//             return console.log(error)
//           } 
//           console.log('db에 저장완료!')
//         })
//       })
//     })
//   })
// })
