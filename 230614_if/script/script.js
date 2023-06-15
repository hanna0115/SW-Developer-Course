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