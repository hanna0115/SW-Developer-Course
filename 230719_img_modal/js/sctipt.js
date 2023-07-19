$('.modal-open').click(function(){
  $('.modal-open-click').fadeIn(300);
  $('.overlay').fadeIn(300);
})

$('.modal-open-click button').click(function(){
  $('.modal-open-click').fadeOut(300);
  $('.overlay').fadeOut(300);
})

$('.modal-list li img').click(function(){
  let src = $(this).attr('src')
  $('.modal-img-click img').attr('src', src)

  $('.modal-img-click').fadeIn(300)
  $('.overlay').fadeIn(300);
})

$('.img-close-btn').click(function(){
  $('.modal-img-click').fadeOut(300)
  $('.overlay').fadeOut(300);
})