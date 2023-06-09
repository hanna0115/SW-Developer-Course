const gnbIconBtn = document.querySelector('.gnb-icon-btn');
const sidebar = document.querySelector('.sidebar');
const sidevarOverlay = document.querySelector('.overlay');

gnbIconBtn.addEventListener('click', function(){
  sidebar.classList.add('is-active')
  sidevarOverlay.classList.add('is-active')
})

sidevarOverlay.addEventListener('click', function(){
  sidebar.classList.remove('is-active')
  sidevarOverlay.classList.remove('is-active')
})