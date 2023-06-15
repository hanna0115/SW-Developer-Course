// [if 조건에 따라 코드를 실행할지 말지]
// 선택지가 하나일 경우
  // 맑으면 true, 비오면 false
  var weather = true;
  // ! : 뒤집기 연산자
  if(!weather){
    alert("우산 챙기기!")
  } // 비오면(false) 우산 챙기기니까 아무것도 나오지 않음(true)

  // [기온이 4도 이하인 경우 외투 챙기기]
  var temp = 23;
  if(temp <= 4){
    alert("외투 챙기기!");
  }

// [훈련생의 점수 기준 판별 프로그램 (기준 : 60점)]
var score = 54;
if(score >= 60){
  alert("합격");
}else{
  alert("불합격");
}

//[100분위 점수를 학점으로 변환하는 프로그램]
//1단계
  var jumsu = 81;
  if(jumsu >= 90){
    alert("A");
  }else if(jumsu >= 80){
    alert("B");
  }else if(jumsu >= 70){
    alert("C");
  }else if(jumsu >= 60){
    alert("D");
  }else{
    alert("F")
  }

// 2단계
  var jumsu = 81;
  var hakjum;
  if(jumsu >= 90){
    hakjum = "A";
  }else if(jumsu >= 80){
    hakjum = "B";
  }else if(jumsu >= 70){
    hakjum = "C";
  }else if(jumsu >= 60){
    hakjum = "D";
  }else{
    hakjum = "F"
  }
  alert(hakjum);


//[and, or 조건을 위한 연습 : 졸업 가능?]
var english = 68; // 어학점수 60점 이상
var credit = 120; // 120학점 이상
var engineer = true; // 취득시:true 미취득시:false
if(english >= 60 && credit >= 120 && engineer){
  alert("축하합니다. 드디어 졸업입니다.")
}else{
  alert("졸업조건을 만족하지 못했습니다.")
}

// 외국인의 경우 어학점수는 반영하지 않음.
var fore = false; // 내국인:false 외국인:true
var english = 68; // 어학점수 60점 이상
var credit = 120; // 120학점 이상
var engineer = true; // 취득시:true 미취득시:false
if(fore){
  // 외국인 졸업사정
  if(credit >= 120 && engineer){
    alert("축하합니다. 드디어 졸업입니다.")
  }else{
    alert("졸업조건을 만족하지 못했습니다.")
  }
}else{
  // 내국인 졸업사정
  if(english >= 60 && credit >= 120 && engineer){
    alert("축하합니다. 드디어 졸업입니다.")
  }else{
    alert("졸업조건을 만족하지 못했습니다.")
  }
}

// 외국인의 경우 어학은 영어, 국어 중 하나의 점수가 60점 이상
var fore = true; // 내국인:false 외국인:true
var english = 90; // 영어 60점 이상
var korean = 58; // 국어점수 60점 이상
var credit = 120; // 120학점 이상
var engineer = true; // 취득시:true 미취득시:false
if(fore){
  if((english >= 60 || korean >= 60) && credit >= 120 && engineer){
    alert("축하합니다. 드디어 졸업입니다.")
  }else{
    alert("졸업조건을 만족하지 못했습니다.")
  }
}else{
  if(english >= 60 && credit >= 120 && engineer){
    alert("축하합니다. 드디어 졸업입니다.")
  }else{
    alert("졸업조건을 만족하지 못했습니다.")
  }
}


// [부동산 알아보기]
// 새 직장을 얻어서 직장 근처에 집을 얻고 싶다.

// 직장으로부터 반경 10키로 이내에 있는 집을 가지고 싶다. (필수)
// 주말마다 여가생활을 해야하니 주차가 가능한 집이었으면 좋겠다. (필수)
// 엘리베이터가 반드시 있었으면 좋겠다. (필수)
// 전용면적이 20평 이상이거나 주변에 상가가 반경 1키로 이내에 있었으면 좋겠다. (필수)


var house = [
  {
    company: 14,
    parking: true,
    elev: false,
    aera: 21,
    shop: 0.8
  },
  {
    company: 9,
    parking: true,
    elev: true,
    aera: 24,
    shop: 1.5
  },
  {
    company: 2,
    parking: true,
    elev: false,
    aera: 22,
    shop: 0.2
  },
  {
    company: 8,
    parking: true,
    elev: true,
    aera: 21,
    shop: 0.5
  },
  {
    company: 12,
    parking: true,
    elev: true,
    aera: 22,
    shop: 0.3
  }
];

if(house[3].company <= 10 && house[3].parking && house[3].elev && (house[3].aera >= 20 || house[3].shop <= 1)){
  alert("계약 가능");
}else{
  alert("계약 불가능");
}


// for문
// for(시작값 ; 조건식 ; 증감식){

// }
// i는 0으로 시작해서 반복할 때마다 1씩 증가하는데
//  그 i가 5보다 작은 동안은 계속 반복한다.
var x = "";
for(i=0 ; i<5 ; i++){
  x = x + "*";
}
alert(x);

// // n번 반복하는 for문 공식
// for(i=0; i<n ; i++){
//   // 반복할 내용
// }

// 1부터 100까지의 자연수를 모두 더한 값을 구하는 프로그램
// 1+2+3+4+...+98+99+100 = ?
var sum = 0;
for(i=1 ; i<=100 ; i++){
  sum = sum + i;
}
alert(sum); // 5050
0+1
  1+2
    3+3
      6+4
        10+5

// 5부터 10까지의 자연수의 총 합계를 구하는 프로그램
// 5+6+7+8+9+10 = ?
var sum1 = 0;
for(i=5 ; i<=10 ; i++){
  sum1 = sum1 + i;
}
alert(sum1);

// 10+9+8+7+6+5 = ?
var sum2 = 0;
for(i=10 ; i>=5 ; i--){
  sum2 = sum2 + i;
}
for(i=5 ; i<=10 ; i++){
  sum2 = sum2 + (15 - i);
}
alert(sum2);

// "10/9/8/7/6/5"
var t = "";
for(i=10 ; i>=5 ; i--){
  if(i != 5){
    t = t + i + "/";
  }else{
    t = t + i;
  }
}
alert(t);


// 이중 for문
// 피라미드 쌓기
// ㅁ
// ㅁㅁ
// ㅁㅁㅁ
// ㅁㅁㅁㅁ
// ㅁㅁㅁㅁㅁ
var pyramid = "";
for(i=1; i<=5; i++){
  var chng = "";
  for(j=1; j<=i; j++){
    chng = chng + "ㅁ";
  }
  pyramid = pyramid + chng + "\n";
}
alert(pyramid);

// 101 102 103 104 105 106 식으로 호실번호를 만들어야 한다.
// 전체 층은 9층이며
// 각 층에는 10개의 가구가 존재한다.
var result = [];
for(i=1; i<=9; i++){
  for(j=1; j<=10; j++){
    if(j<10){
      result.push(i+"0"+j);
    }else{
      result.push(""+i+j);
    }
  }
}
alert(result);