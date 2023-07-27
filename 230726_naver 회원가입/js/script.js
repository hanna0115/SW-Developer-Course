// label 클릭했을 때 
// 클릭된 label의 자식인 checkbox-img에 checked class toggle
$('label').on('click', function(e){
  e.preventDefault();
  $(this).children('.checkbox-img').toggleClass('checked');

  // 클릭된 label의 자식인 .checkbox-img class에 checked라는 class가 포함되어 있다면
  // <input type="checkbox">의 속성 checked
  if($(this).children('.checkbox-img').hasClass('checked')) {
    // .checkbox-img에 checked라는 클래스가 있을 때
    $(this).children('input[type="checkbox"]').attr('checked', true);
  } else {
    $(this).children('input[type="checkbox"]').removeAttr('checked');
  }
})