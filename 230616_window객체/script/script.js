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


// 계산기 만들기 : 숫자와 관련된 전역 메소드 'Number' 
var a = window.prompt("더하기 할 첫번째 값을 입력하시오."); // 입력한 숫자 문자열
var b = window.prompt("더하기 할 두번째 값을 입력하시오.");
a = Number(a);
b = Number(a);

window.alert(a+b);

// 7나누기3의 몫
alert(parseInt(7/3));
// 7나누기3의 나머지
alert(7%3);


// 최소, 최대값을 지정하고 그 사이의 임의의 정수를 추출하는 함수
function rand(min, max){
  return Math.floor(Math.random()*(max-min+1) + min);
}
alert( rand(min,max) );
alert( rand(1,6) );
// 설명
alert(Math.random()); // 0~1 사이의 무작위 실수 나옴
alert(Math.random()*6); // 0~6 사이의 무작위 실수 나옴
// 최소값이 3, 최대값이 6
alert( Math.random()*(6-3+1) + 3 ); // +1하는 이유: +1하지 않았을 때 6나올 확률 0이기 때문에
alert( Math.floor(Math.random()*(6-3+1) + 3) ); // 정수나오게 하기 위해 버림함.

// 배경색 바꾸기
document.body.style.backgroundColor = "rgb("+rand(0, 255)+", "+rand(0, 255)+", "+rand(0, 255)+")";
// 블루계열만 나오게
document.body.style.backgroundColor = "rgb("+rand(0, 100)+", "+rand(0, 100)+", "+rand(100, 255)+")";


// Date 객체
var now = new Date();
var month = now.getMonth();
var day = now.getDay(); //
alert( month + ", " + day ); // 6월, 금요일 -> 5,5 // 6월: 5번째, 금요일: 5번째(일요일부터 시작)

function addzero(num){
  if(num < 10){
    return "0"+num;
  }else{
    return num;
  }
}
var now = new Date();
var year = now.getFullYear();
var month = addzero(now.getMonth()+1);
var date = addzero(now.getDate());
var day = now.getDay(); //
var daytext = ["일", "월", "화", "수", "목", "금", "토"];
alert( year + "-" +month + "-" +date+" "+daytext[day]+"요일" );
