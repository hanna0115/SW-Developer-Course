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


document.querySelector('#submit').addEventListener('click', function(e){
  let req = document.querySelectorAll('.req').length;
  let chkreq = document.querySelectorAll('.req .checked').length;
  let unchk = req - chkreq;
  console.log(req, chkreq)
  if(unchk == 0) {
    document.querySelector('#form1').submit();
  } else {
    e.preventDefault();
    document.querySelector('.req-alert').style.visibility = 'visible';
  }
})


document.querySelector('#cancel').addEventListener('click', function(){
  location.href= "https://www.naver.com";
})