document.querySelectorAll('input').forEach(function(input){
  input.addEventListener('focus', function(){
    this.parentNode.classList.add('border-act');
  })

  input.addEventListener('focusout', function(){
    this.parentNode.classList.remove('border-act');
  })
})