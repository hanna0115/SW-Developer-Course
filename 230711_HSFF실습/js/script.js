// main meun hover시 sub menu up, down
$('.gnb-list > li').hover(function(){
  $(this).find('ul').stop().slideDown(500);
  $(this).find('a').addClass('on');
}, function(){
  $(this).find('ul').stop().slideUp(500);
  $(this).find('a').removeClass('on');
})

// button click시 img slide
let buttons = document.querySelectorAll('.btn-group button');
let slideList = document.querySelector('.slide-list');

buttons.forEach(function(btn, index){
  btn.addEventListener('click', () => {
    console.log(btn)
    slideList.style.transform = `translateX(-${index}00vw)`;
  })
})