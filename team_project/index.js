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

// app.get('/place-details/:id', function(requests, response){
//   db.collection('api').findOne({_id : requests.params.id}, function(error, result){
//     response.render('place-details.ejs', {api : result});
//   })

//   db.collection('review').find({name : requests.params.id}).toArray(function(error, result){
//     // response.render('place-details.ejs', {review : result});
//     console.log(result)
//   })
// })
// app.post('/place-details/:id', function(requests, response){
//   db.collection('review').insertOne({name : requests.params.id, 'star-rating' : parseInt(requests.body.star), 'review-txt' : requests.body.reviewTxt}, function(error, result){
//     console.log('review DB에 저장 완료!')
//     response.redirect('/place-details/:id')
//   })

// })

// Mongodb에 데이터 넣기
// let url = "https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=785&MobileOS=ect&MobileApp=DDju&_type=json&areaCode=3&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D";

// fetch(url)
// .then((res) => res.json())
// .then((myJson) => {
//   let daejeon = myJson.response.body.items.item;
//   for(let i = 0; i < daejeon.length; i++) {
//     db.collection('test').insert({_id : daejeon[i].contentid,
//       'title' : daejeon[i].title, 'contenttypeid' : daejeon[i].contenttypeid,
//       'sigungucode' : daejeon[i].sigungucode, 'img' : daejeon[i].firstimage,
//       'addr1' : daejeon[i].addr1, 'addr2' : daejeon[i].addr2,
//       'zipcode' : daejeon[i].zipcode, 'mapx' : daejeon[i].mapx, 'mapy' : daejeon[i].mapy,
//       'createdtime' : daejeon[i].createdtime}, function(error, result){
//       console.log('db에 저장완료!')
//     })
//   }
// })


// contenttypeid가 32(숙소)인 데이터 삭제하기
// app.get('/add', function(){
//   db.collection('api').deleteMany({'contenttypeid' : '32'}, function(error, result){
//     console.log('삭제 완료!!')
//     if(error) {
//       console.log(error)
//     }
//   })
// })


// Mongodb에서 데이터 가져와서 일치하는 id 값에 데이터 추가하기

// 개요, 홈페이지 주소
// for 반복문 : 실패
// app.get('/add', function(requests, response){
//   db.collection('api').find().toArray(function(error, result){
//     // console.log(result)
//     // for(let i = 0; i < result.length; i++) {
//       // let url = 'https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ect&MobileApp=DDju&_type=json&contentId=' + result[i]._id + '&overviewYN=Y&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D';
//       // fetch(url)
//       // .then((res) => res.json())
//       // .then((json) => {
//       //   let text = json.response.body.items.item;
        
//       //   db.collection('api').update({_id : result._id}, {$set : {'overview' : text[0].overview, 'hmpg' : text[0].hmpg}}, function(){
//       //     if(error) {
//       //       return console.log(error)
//       //     } 
//       //     console.log('db에 저장완료!')
//       //   })
//       // })
//     // }
//   })
// })

// app.get('/api', function(requests, response){
//   db.collection('api').find().toArray(function(error, result){
//     // console.log(result.length)
//     for(let i = 0; i < 1; i++) {
//       let url = 'https://apis.data.go.kr/B551011/KorService1/detailCommon1?MobileOS=ect&MobileApp=DDju&_type=json&contentId=' + result[i]._id + '&defaultYN=Y&overviewYN=Y&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D';

//       fetch(url)
//       .then((res) => res.json())
//       .then((json) => {
//         let text = json.response.body.items.item;
//         let overview = text[0].overview.replace('<br />', ' ')
//         let newOverview = overview.replace('<br>', ' ')
//         console.log(newOverview, text[0].hmpg)
        
//         db.collection('api').update({_id : result[i]._id}, {$set : {'overview' : newOverview}}, function(error, result){
//           if(error) {
//             return console.log(error)
//           } 
//           console.log('db에 저장완료!' + i)
//         })
//       })
//     }
//   })
// })

// foreach 반복문 : 실패
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


// for of 반복문 : 실패
// app.get('/add', function(requests, response){
//   db.collection('api').find().toArray(function(error, result){
//     for(let item of result) {
//       // console.log(item._id)
//       let url = 'https://apis.data.go.kr/B551011/KorService1/detailImage1?MobileOS=etc&MobileApp=DDju&_type=json&contentId=' + item._id + '&subImageYN=Y&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D'

//       fetch(url)
//       .then((res) => res.json())
//       .then((json) => {
//         let text = json.response.body.items.item;
//         db.collection('api').update({_id : item.contentid}, {$set : {'img2' : text[0].originimgurl}}, function(error, result){
//           if(error) {
//             return console.log(error)
//           } 
//         })
//       })
//     }
//   })
// })


// 이용시간, 쉬는날, 문의 및 안내 등 
// for 반복문 -> 200개까지 확인
// app.get('/add', function(requests, response){
//   db.collection('test').find({contenttypeid : '39'}).toArray(function(error, result){
//     // console.log(result.length)
//     // for(let i = 0; i < 200; i++) {
//     //   let url = 'https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ect&MobileApp=DDju&_type=json&contentId=' + result[i]._id + '&contentTypeId=39&serviceKey=K3ffxC1oIoWzYskEUMHmA3hfplXmJTt08QidPS9Br4fcnakaukocNyaP5ADWFtSMQUivJzOwjmKlnqVUEADYXQ%3D%3D';
//     //   fetch(url)
//     //   .then((res) => res.json())
//     //   .then((json) => {
//     //     let text = json.response.body.items.item;
//     //     // console.log(text)
        
//     //     db.collection('test').update({_id : result[i]._id},
//     //       {$set : {'opentime' : text[0].opentimefood, 'restdate' : text[0].restdatefood, 'infocenter' : text[0].infocenterfood}}, function(error, result){
//     //         if(error) {
//     //           return console.log(error)
//     //         } 
//     //         console.log('db에 저장완료!' + i)
//     //     })
//     //   })
//     // }
//   })
// })


// contenttypeid -> find, url 값 같게 설정
// result.length 확인 후 i 설정
// 데이터 한개 먼저 시범으로 확인 후 update 시작
// 12 : {$set : {'usetime' : text[0].usetime, 'restdate' : text[0].restdate, 'infocenter' : text[0].infocenter}}
// 14 : {$set : {'usetime' : text[0].usetimeculture, 'restdate' : text[0].restdateculture, 'infocenter' : text[0].infocenterculture}}
// 행사 홈페이지 정보 필요한지 확인
// 15 : {$set : {'startdate' : text[0].eventstartdate, 'enddate' : text[0].eventenddate, 'eventplace' : text[0].eventplace}}
// 28 : {$set : {'usetime' : text[0].usetimeleports, 'restdate' : text[0].restdateleports, 'infocenter' : text[0].infocenterleports}}
// 38 : {$set : {'opentime' : text[0].opentime, 'restdate' : text[0].restdateshopping, 'infocenter' : text[0].infocentershopping}}
// 39 : {$set : {'opentime' : text[0].opentimefood, 'restdate' : text[0].restdatefood, 'infocenter' : text[0].infocenterfood}}
// app.get('/api', function(requests, response){
//   db.collection('api').find({contenttypeid : '39'}).toArray(function(error, result){
//     console.log(result.length)
//     // for(let i = 200; i < 417; i++) {
//     //   let url = 'https://apis.data.go.kr/B551011/KorService1/detailIntro1?MobileOS=ect&MobileApp=DDju&_type=json&contentId=' + result[i]._id + '&contentTypeId=39&serviceKey=SLJe0Elsk0DOYqHIPeUB7PP2WOW3J0LjCct3gZhtNfafIAU7cyzRTDGocxAQWuLvgm2cRPKIAJPkJmUJnWO%2FrA%3D%3D';
//     //   fetch(url)
//     //   .then((res) => res.json())
//     //   .then((json) => {
//     //     let text = json.response.body.items.item;

//     //     db.collection('api').update({_id : result[i]._id},
//     //       {$set : {'opentime' : text[0].opentimefood, 'restdate' : text[0].restdatefood, 'infocenter' : text[0].infocenterfood}}, function(error, result){
//     //         if(error) {
//     //           return console.log(error)
//     //         } 
//     //         console.log('db에 저장완료!' + i)
//     //     })
//       // })
//     // }
//   })
// })

app.post('/search', function(requests, response){
  console.log(requests.body.placeMenu)
  let creatIndex = [
    {
      $search: {
        index: "search",
        text: {
          query: requests.body.search,
          path: {
            wildcard: "*"
          }
        }
      }
    }
  ]
  db.collection('api').aggregate(creatIndex).toArray(function(error, result){
    let placeMenu = requests.body.placeMenu
    let district = requests.body.district
    
    if(placeMenu == undefined || (placeMenu == '' && district == '')) {
      response.render('search.ejs', {search : result})
    } else if(placeMenu && !district) {
      let search = result.filter((item) => item.contenttypeid == placeMenu)  
      response.render('search.ejs', {search : search})
    } else if(!placeMenu && district) {
      let search = result.filter((item) => item.sigungucode == district)
      response.render('search.ejs', {search : search})
    } else {
      let search = result.filter((item) => item.contenttypeid == placeMenu && item.sigungucode == district)
      response.render('search.ejs', {search : search})
    }
  })
})