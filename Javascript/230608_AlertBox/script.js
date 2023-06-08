document.getElementById('open-btn').addEventListener('click', function(){
  document.getElementById('alert').style.display = 'flex';
})

function closeAlert(){
  document.getElementById('alert').style.display = 'none'
}

// document.getElementById('close-btn').addEventListener('click', closeAlert)

// const openBtn = document.getElementById('open-btn');
// const closeBtn = document.getElementById('close-btn');
// const box = document.querySelector('.box');

// openBtn.addEventListener('click', function(){
//   box.classList.add('open');
// })

// closeBtn.addEventListener('click', function(){
//   box.classList.remove('open');
// })