// Array 안에 object
let products = [
  {
    img : 'https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/88c9e86c-58d5-4cfc-b1ee-e18213a5ef2e/get-%E2%80%98em-while-you-can-cortez.jpg',
    title : '우먼스 코르테즈',
    price : '119,000 원',
    size : ['230', '235', '240', '245']
  }
]

document.querySelector('.box-item img').src = products[0].img;
document.querySelector('.sho-info h2').innerHTML = products[0].title;
document.querySelectorAll('.sho-info p')[0].innerHTML = products[0].price;
document.querySelectorAll('.sho-info p')[1].innerHTML = products[0].size;