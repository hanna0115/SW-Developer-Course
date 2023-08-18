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
  }
]

// document.querySelector('.box-item img').src = products[0].img;
// document.querySelector('.sho-info h2').innerHTML = products[0].title;
// document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price;
// document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;

const boxItems = document.querySelectorAll('.box-item');
boxItems.forEach(function(item, index){
  item.querySelector('img').src = products[index].img;
  item.querySelector('.sho-info h2').innerHTML = products[index].title;
  item.querySelectorAll('.sho-info p')[0].innerHTML = products[index].price;
  item.querySelectorAll('.sho-info p')[1].innerHTML = products[index].size;
})
