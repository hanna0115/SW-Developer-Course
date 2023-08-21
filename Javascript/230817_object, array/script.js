// Array 안에 object
let products = [
  {
    img : 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/88c9e86c-58d5-4cfc-b1ee-e18213a5ef2e/get-%E2%80%98em-while-you-can-cortez.jpg',
    title : '우먼스 코르테즈',
    price : '119,000 원',
    size : ['230', '235', '240', '245']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4b2f5e8a-8638-4fa5-81fa-e714024efb39/%ED%85%8C%ED%81%AC-%ED%97%A4%EB%9D%BC-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-5psTyMig.png',
    title : '나이키 테크 헤라',
    price : '103,200 원',
    size : ['220', '225', '230', '235', '240', '245']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d38e80c8-a177-4927-9c05-0c4099bf1a53/tc-7900-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-2rIhOi40.png',
    title : '나이키 TC 7900',
    price : '97,300 원',
    size : ['225', '230', '235', '240']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/23ddfb6f-a522-458c-a0d9-cf678294318b/%EB%8D%B0%EC%9D%B4%EB%B8%8C%EB%A0%88%EC%9D%B4%ED%81%AC-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-KzwVEwzG.png',
    title : '나이키 데이브레이크',
    price : '129,000 원',
    size : ['220', '225', '230', '235', '240', '245', '250', '255']
  },
  {
    img : 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/76274d81-023f-4c0e-82bf-25ff919fe399/%EC%9A%B0%EB%A8%BC%EC%8A%A4-%EB%8D%A9%ED%81%AC-%EB%A1%9C%EC%9A%B0-valentine-s-day-fd0803-100-%EC%B6%9C%EC%8B%9C%EC%9D%BC.jpg',
    title : "우먼스 덩크 로우 Valentine's Day",
    price : '139,000 원',
    size : ['230', '235', '240', '245', '250', '255']
  },
  {
    img : 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b3fe91f5-2696-46c6-ab05-5fdef7015a05/%EC%97%90%EC%96%B4%EB%A7%A5%EC%8A%A4-97-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-rCXkYtQ4.png',
    title : '나이키 에어맥스 97',
    price : '142,300 원',
    size : ['225', '230', '235', '240', '245', '250']
  }
]

// document.querySelector('.box-item img').src = products[0].img;
// document.querySelector('.sho-info h2').innerHTML = products[0].title;
// document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price;
// document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;

// const boxItems = document.querySelectorAll('.box-item');
// boxItems.forEach(function(item, index){
//   item.querySelector('img').src = products[index].img;
//   item.querySelector('.sho-info h2').innerHTML = products[index].title;
//   item.querySelectorAll('.sho-info p')[0].innerHTML = products[index].price;
//   item.querySelectorAll('.sho-info p')[1].innerHTML = products[index].size;
// })


// 프론트엔드 개발자가 하는 역할
// 서버가 보낸 데이터를 html 꽂아준다.
// 전문용어로 '데이터 바인딩'이라고 한다.
// 데이터 바인딩을 쉽고 편하게 할 수 있도록 도와주는 도구 (React, Vue, angular)
// 시작 기호가 대괄호[], 중괄호{}냐에 따라서 Array, object 구분


// Javascript로 html 요소 생성
// createElemen('태그이름)
// let h1Tag = document.createElement('h1');
// h1Tag.innerHTML = '안녕하세요';
// h1Tag.classList.add('hi');
// document.querySelector('.box-list').appendChild(h1Tag);

// box-list 안에 p태그로 생성
// let pTag = document.createElement('p');
// pTag.innerHTML = 'createElement로 p태그 생성'
// document.querySelector('.box-list').appendChild(pTag);


// createElement로 products length만큼 html 생성
// let pTag = document.createElement('p');
// pTag.innerHTML = 'createElement로 p 태그 생성';
// document.querySelector('.box-list').appendChild(pTag);


// products length만큼 createElement로 html 생성
// .box-list 안에 .box-item이라는 class를 가진 div 생성
// .box-item 안 
// 1. img tag 생성 src = products.img / alt = products.title
// 2. .box-list 안에 .sho-info라는 class를 가진 div 생성
// 3. .sho-info 안에 h2 tag 생성 => innerHTML = products.title
// 4. .sho-info 안에 p tag 생성 => innerHTML = products.price
// 5. .sho-info 안에 p tag 생성 => innerHTML = products.size

// let boxList = document.querySelector('.box-list');

// products.forEach(function(item){
//   let boxItem = document.createElement('div');
//   boxItem.classList.add('box-item');
//   boxList.appendChild(boxItem);

//   let boxImg = document.createElement('img');
//   boxImg.src = item.img;
//   boxImg.alt = item.title;
//   boxItem.appendChild(boxImg);

//   let shoInfo = document.createElement('div');
//   shoInfo.classList.add('sho-info');
//   boxItem.appendChild(shoInfo);

//   let boxTitle = document.createElement('h2');
//   boxTitle.innerHTML = item.title;
//   shoInfo.appendChild(boxTitle);

//   let boxPrice = document.createElement('p');
//   boxPrice.innerHTML = item.price;
//   shoInfo.appendChild(boxPrice);

//   let boxSize = document.createElement('p');
//   boxSize.innerHTML = item.size;
//   shoInfo.appendChild(boxSize);
// })


// Javascript로 html 생성하는 방법2 (최신문법)
// let pTag = '<p class="txt">html 생성</p>';
// .insertAdjacentHTML(위치, 문자) => 문자형 html을 넣어주는 함수
// 첫번째 파라미터 : 추가할 위치(beforeend = 안쪽 맨 밑)
// 두번째 파라미터 : 추가할 html 문자(pTag)
// document.querySelector('.box-list').insertAdjacentHTML('beforeend', pTag);


// insertAdjacentHTML로 .box-item 완성
