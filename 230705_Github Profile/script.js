// const profileImg = $('.profile-img');
// const dropdownMenu = $('.dropdown-menu');

// profileImg.on('click', () => {
//   dropdownMenu.toggleClass('is-open');
// });


const profileImg = document.querySelector('.profile-img');
const dropdownMenu = document.querySelector('.dropdown-menu');

profileImg.addEventListener('click', () => {
  dropdownMenu.classList.toggle('is-open')
})