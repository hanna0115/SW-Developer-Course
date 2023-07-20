const circleBtn = document.querySelectorAll('.circle-button-list button');
const slideWrapper = document.querySelector('.slide-wrapper');

circleBtn.forEach(function(item, index){
  item.addEventListener('click', function(){
    circleBtn.forEach(function(item){
      item.classList.remove('is-active')
    })
    slideWrapper.style.transform = `translateX(-${index}00vw)`;
    item.classList.add('is-active')
  })
})

let slideItems = document.querySelectorAll('.slide-list');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let crrentSlide = 0;

// nextBtn.addEventListener('click', function(){
//   if(crrentSlide < slideItems.length -1){
//     crrentSlide++;
//     slideWrapper.style.transform = `translateX(-${crrentSlide * 100}vw)`
//   }
// })

// prevBtn.addEventListener('click', function(){
//   if(crrentSlide > 0){
//     crrentSlide--;
//     slideWrapper.style.transform = 'translateX(-' + crrentSlide * 100 + 'vw)'
//   }
// })

setInterval(function(){
  if(crrentSlide < slideItems.length -1){
    crrentSlide++;
    slideWrapper.style.transform = `translateX(-${crrentSlide * 100}vw)`
  }else{
    crrentSlide = 0;
    slideWrapper.style.transform = `translateX(-${crrentSlide * 100}vw)`
  }
}, 3000)