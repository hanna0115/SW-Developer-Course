// jQuery
// $('.gnb-main-item').hover(function(){
//   // gnb-main-item에 hover 했을 때,git .sub class 찾아서 slideDown()
//   $(this).find('.sub').stop().slideDown(500);
//   $(this).children('a').addClass('active');
// }, function(){
//   $(this).find('.sub').stop().slideUp(500);
//   $(this).children('a').removeClass('active');
// })


// Vanilla JS
let gnbItems = document.querySelectorAll('.gnb-main-item');

gnbItems.forEach(function(item){
  let subMenu = item.querySelector('.sub');
  
  item.addEventListener('mouseover', function(){
    subMenu.classList.add('active');
  })
})