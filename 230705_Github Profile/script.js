// dropdown-btn을 클릭했을 때 dropdown-menu한테 active class add
// dropdown-menu가 active를 가지고 있을 때 클릭하면 active class remove
// toggle

let dropdownBtn = document.querySelector('.dropdown-btn');
let dropdownMenu = document.querySelector('.dropdown-menu');

dropdownBtn.addEventListener('click', function(e){
  e.preventDefault();
  dropdownMenu.classList.toggle('active');
})