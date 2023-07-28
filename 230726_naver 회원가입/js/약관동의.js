// label 클릭했을 때 
// 클릭된 label의 자식인 checkbox-img에 checked class toggle
document.querySelectorAll('label').forEach(function(item){
  item.addEventListener('click', function(e){
    e.preventDefault();
    if(this.querySelector('.checkbox-img').classList.contains('checked')){
      this.querySelector('.checkbox-img').classList.remove('checked');
      this.querySelector('input').removeAttribute('checked')
    } else {
      this.querySelector('.checkbox-img').classList.add('checked');
      this.querySelector('input').setAttribute('checked', 'checked');
    }
  })
})


// .total을 체크하면 .agree 전부 체크
// .total을 언체크하면 .agree 전부 언체크
document.querySelector('.total').addEventListener('click', function(){
  const agree = document.querySelectorAll('.agree');

  if(this.querySelector('.checkbox-img').classList.contains('checked')){
  agree.forEach(function(item){
      item.querySelector('.checkbox-img').classList.add('checked');
      item.querySelector('input').setAttribute('checked', 'checked')
    })
  } else {
    agree.forEach(function(item){
      item.querySelector('.checkbox-img').classList.remove('checked');
      item.querySelector('input').removeAttribute('checked', 'checked')
  })
}
})


document.querySelectorAll('.agree label').forEach(function(item){
  item.addEventListener('click', function(){
    const total = document.querySelector('.total label');

    let len = document.querySelectorAll('.agree .checkbox-img').length;
    let chklen = document.querySelectorAll('.agree .checked').length;
    let unchk = len - chklen;

    if(unchk == 0) {
      total.querySelector('.checkbox-img').classList.add('checked');
      total.querySelector('input').setAttribute('checked', 'checked');
    } else {
      total.querySelector('.checkbox-img').classList.remove('checked');
      total.querySelector('input').removeAttribute('checked')
    }
  })
})


// .agree label 안 checkbox가 모두 체크 상태라면 모두 동의 버튼도 체크로 변경
// 하나라도 체크되지 않은 값이 있다면 모두 동의 버튼 언체크
document.querySelector('#submit').addEventListener('click', function(e){
  let req = document.querySelectorAll('.req').length;
  let chkreq = document.querySelectorAll('.req .checked').length;
  let unchk = req - chkreq;

  if(unchk == 0) {
    document.querySelector('#form1').submit();
  } else {
    e.preventDefault();
    document.querySelector('.req-alert').style.visibility = 'visible';
  }
})


// 취소 버튼 클릭했을 때 네이버 사이트로 이동
document.querySelector('#cancel').addEventListener('click', function(){
  location.href= "https://www.naver.com";
})