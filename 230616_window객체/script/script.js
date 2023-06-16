window.alert("Hello world"); // window. 생략 가능
alert(window.name) // 설정된 것이 없어서 아무것도 안나옴
alert(window.screenX) // 브라우저의 위치 알 수 있음. 읽기만 가능


// setTimeout(해야할일_익명함수, 지연시간); 1회용
setTimeout(function(){
  alert("인사가 늦었습니다. 안녕하세요.")
}, 3000); // 3초 뒤에 alert 나옴

// setInterval(해야할일, 지연시간); 무한대, 정해진 시간마다
setInterval(function(){
  document.body.innerHTML = document.body.innerHTML + "A";
}, 500); //0.5초마다 A가 생김

// 위와 같은 결과
function addA(){
  document.body.innerHTML = document.body.innerHTML + "A";
}
setInterval(addA, 500);

// 디지털시계 만들기
function chktime(){
  var now = new Date(); // now라는 변수 안에 시간을 넣음
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var msec = now.getMilliseconds();
  document.getElementById("si").innerHTML = addzero(hour);
  document.getElementById("bun").innerHTML = addzero(min);
  document.getElementById("cho").innerHTML = addzero(sec);
  document.getElementById("mcho").innerHTML = addzero2(msec);
}

function addzero(num){
  if(num < 10){
    return "0"+num;
  }else{
    return num;
  }
}

function addzero2(num){
  if(num < 10){
    return "00"+num;
  }else if(num < 100){
    return "0"+num;
  }else{
    return num;
  }
}

window.setInterval(chktime, 1);


// // element 객체 'length'(개수)
// document.getElementsByTagName("span").length; // span태그들 몇개니?
var arr = [1, 5, 5, 6, 9, "a", true];
alert( arr.length ); // 배열 알맹이 수 // 7
var text = "Hello world!";
alert(text.length); // 글자 수 // 12
alert(text.split(" ").length); // 단어개수 알아보기(띄어쓰기 부분에서 폭파) // 2


// style 속성 변경
document.getElementById("si").style.fontSize = "2em"


// location
location.href="http://naver.com"; // redirect(리다이렉트): 이 주소로 강제로 이동(비추)
// 새로고침버튼 만들기
document.getElementById("saero").onclick = function(){
  location.reload();
}