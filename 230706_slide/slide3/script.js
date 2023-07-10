// const slideList = document.querySelector('.slide-list');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// let i = 0;

// nextBtn.addEventListener('click', function(){
//   if(i < 2){
//     i++;
//     let xValue = - i * 100 + 'vw';
//     slideList.style.transform = `translateX(${xValue})`;
//   }
// })

// prevBtn.addEventListener('click', function(){
//   if(i > 0){
//     i--;
//     let xValue = - i * 100 + 'vw';
//     slideList.style.transform = `translateX(${xValue})`;
//   }
// })

let slideList = document.querySelector('.slide-list');
let slideItems = document.querySelectorAll('.slide-list li');

let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let crrentSlide = 0;

nextBtn.addEventListener('click', function(){
  // crrentSlide 배열 length의 -1보다 값이 작을 때
  if(crrentSlide < slideItems.length -1){
    crrentSlide++;
    slideList.style.transform = `translateX(-${crrentSlide * 100}vw)`
  }
})

prevBtn.addEventListener('click', function(){
  if(crrentSlide > 0){
    crrentSlide--;
    slideList.style.transform = 'translateX(-' + crrentSlide * 100 + 'vw)'
  }
})