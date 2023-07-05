const profileImg = $('.profile-img');
const dropdownMenu = $('.dropdown-menu');

profileImg.on('click', () => {
  dropdownMenu.toggleClass('is-open');
});