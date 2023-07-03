document.querySelector('.drawer-menu1').addEventListener('click', function(){
  document.querySelector('.menu1').classList.toggle('is-active');
  document.querySelector('.lego-shopping-list').classList.toggle('is-active');
})

document.querySelector('.drawer-menu2').addEventListener('click', function(){
  document.querySelector('.menu2').classList.toggle('is-active');
  document.querySelector('.lego-brand-intro-list').classList.toggle('is-active');
})

document.querySelector('.drawer-menu3').addEventListener('click', function(){
  document.querySelector('.menu3').classList.toggle('is-active');
  document.querySelector('.customer-support-list').classList.toggle('is-active');
})