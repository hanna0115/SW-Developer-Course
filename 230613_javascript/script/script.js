// document.getElementById("apple").onclick = function(){
//   alert("누르지 말랬잖아");
// }

// // 주어: 객체(object)
// 주어;
// 주어.속성;
// 주어.주어.속성;
// 주어.속성.속성;

// 주어.함수();
// 주어.함수(재료);

// // 정보 읽기, 묻기, 설정 정도만
// 한나;
// 한나.성별;
// 한나.왼팔.두께;
// 한나.신체조건.키;
// // 명령 : 이벤트 생김
// 한나.노래해라();
// 한나.노래해라(K-pop);

// 절대 열 수 없는 페이지
// window.close();

// 1. 자바스크립트는 컴파일(브라우저가 해줌)이 필요업는 인터프리터 언어(한줄한줄 읽으며 실행, 배우기/문제 찾기 쉬움)이다.
// 2. 자바스크립트는 그 어떤 플랫폼이라도 브라우저만 있으면 정상 작동된다.(지금은 아님)

// // 이스케이프 문자 : 역슬래쉬(\) 앞에 붙이기
// alert("안녕하세요 \'저\'는 \"오한나\"입니다.")

// // var 만들 변수의 이름;
// // var는 최초로 만들 때만 사용
// var aaa; // 변수를 만들고

// // 부를 때 이름만 부름
// // = : 3이라는 숫자를 aaa에 집어 넣어라
// aaa = 3; // 변수에 값을 넣고(대입하다)

// // 이렇게도 가능
// var aaa = 3; // 숫자 전용 변수

// alert(aaa); // 그 내용을 확인했다.

// var bbb = "3"; // 문자열 전용 변수

// // 
// var a = 3;
// var b = 5;

// var c = a+b;

// alert(c); // 8

// var a = "3";
// var b = "5";

// var c = a+b;

// alert(c); // 35

// var a = "안녕하세요";
// var b = "hello";

// var c = a+b;

// alert(c); // 안녕하세요hello

// var a = 5;
// var b = "hello";

// var c = a+b;

// alert(c); // 5hello -> 문자열이 포함되어 있으면 결과는 무조건 문자열

// var a = 5;
// var b = "hello";

// var c = a-b; var c = a/b; //덧셈 뺀 나머지는 오류

// alert(c); //NaN : Not a Number

// // [배열형]
//        //  0   1   2   3  -> index number
// var arr = [20, 35, 40, 50]; // 배열(array)

// alert(arr); // 20, 35, 40, 50
// alert(arr[0]); // 20
// alert(arr[3]); // 50
// alert(arr[4]); // undefined

// var arr = [];
// var arr = Array(4); //4칸짜리 배열 만들자

// var arr =[]; // 배열을 만들 건데
// arr[0] = 20; // 0번째는 20 넣고
// arr[1] = 35; // 1번째는 35를 넣을 거야
// arr = 40; // 오류남. 인덱스 넘버 설정 안했기 때문

// var arr = [175, 78, "남자", false, null];
// alert( "한지호의 키는 arr[0] 입니다." ); // 한지호의 키는 arr[0] 입니다.
// alert( "한지호의 키는" arr[0] "입니다." ); // error
// alert( "한지호의 키는 "+175+" 입니다." ); // 한지호의 키는 175 입니다.
// alert( "한지호의 키는 "+arr[0]+" 입니다." ); // 한지호의 키는 175 입니다.
// alert( "한지호의 몸무게는 "+arr[1]+" 입니다."); // 한지호의 몸무게는 78 입니다.
// alert( "한지호의 성별은 "+arr[2]+" 입니다."); // 한지호의 성별은 남자 입니다.

// if(arr[3]){
//   alert("한지호는 기혼입니다.");
// }else{
//   alert("한지호는 미혼입니다.");
// } // false 이기 때문에 한지호는 미혼입니다 라고 뜸

// // [이중배열]
// // 우리 건물은 총 5층짜리 건물인데 
// // 1층부터 4층까지는 세개의 원룸이 있고
// // 5층에는 주인세대 1세대만 있다.
// // var lenthouse = [
// //   1층, 
// //   2층, 
// //   3층, 
// //   4층, 
// //   5층
// // ];

// // var lenthouse = [
// //   [101호, 102호, 103호],  
// //   [201호, 202호, 203호],  
// //   [301호, 302호, 303호],  
// //   [401호, 402호, 403호],  
// //   [501호]
// // ]; // 이중 배열

// var lenthouse = [
//   ["전지현", "김태희", "정지훈"],  
//   ["송혜교", "RM", "슈가"],  
//   ["옥택연", "송강호", "태진아"],  
//   ["홍금보", "성룡", "신성록"],  
//   [한지호]
// ];

// var floor;
// var ho;

// for(i=0; i<5; i++){
//   for(j=0; j<lenthouse[i].length; j++){
//     if(lenthouse[i][j] == "송강호"){
//       floor = i+1;
//       ho = j+1;
//       break;
//     }
//   }
// }

// alert("송강호는 "+floor+"0"+ho+"호실에서 발견되었습니다.") // 송강호는 302호실에서 발견되었습니다.

// // [객체형 변수]
// // var jiho = {속성명:속성값};
// var jiho = {
//   height:175, 
//   weight:78, 
//   gender:"남자", 
//   married:false, 
//   house:null, 
//   friends: ["김태훈", "염경선", "차영규", "황단비"] // 마지막 값에 쉼표가 들어가면 오류남.
// };

// // 속성명 이용 가능
// alert( "지호의 몸무게 : "+jiho.weight );
// alert( "지호의 친구1 : "+jiho.friends[1] );

// //[변수의 범위(지역변수, 전역변수)]
// // var jiho = "한지호";

// // alert(jiho);

// // function seoul(){
// //   alert(jiho);
// // }
// // seoul(); 



// // function seoul(){
// //   var jiho = "한지호";
// //   alert(jiho);
// // }
// // seoul(); 

// // alert(jiho); //오류

// // [내장함수 prompt()]
// // 생년을 입력받아서 나이 내보내는 것
// var birth = prompt("생년을 입력하세요. 예) 1980"); // 다양하게 입력 가능하기 때문에 예시 넣어줌.
// birth = parseInt(birth);
// var age = 2023 -birth;
// alert("당신의 나이는 "+age+"세 입니다.");

// // [내장함수 confirm()]
// var lunch = confirm("당신은 점심을 드셨습니까?");
// if(lunch){
//   alert("오 배부르시겠네요.");
// }else{
//   alert("밥 먹을 시간도 없는 당신 화이팅.");
// }

// // 내장함수 setInterval
// function rand(min,max){
//   return Math.floor(Math.random()*(max-min+1)+min);
// }

// setInterval(function(){
//   var r = rand(0,255)
//   var g = rand(0,255)
//   var b = rand(0,255)
//   document.getElementsByTagName("body")[0].style.backgroundColor
//   = "rbg("+r+","+g+","+b+")";
// }, 1000);



// // [함수]
// function 떡볶이(떡, 소스){
//   떡을 익힌다
//   소스를 넣는다
//   섞으면서 졸인다
//   접시에 담아 낸다
// }

// 떡볶이(밀떡, 고추장);

// 떡볶이(쌀떡, 간장);


// // [증감 연산자]
// // 후위 증감 연산자
// var num = 3;
// num++;

// alert(num); // 4

// var num = 3;
// num++;
// num++;

// alert(num); // 5

// var num = 3;
// num--;

// //전위 증감 연산자
// alert(num); // 2

// var num = 3;
// ++num;

// alert(num); // 4

// var num = 3;
// --num;

// alert(num); // 2

// // 지금까지 버튼을 누른 횟수 = 0
// //#btn이 눌릴 때마다 이런 일을 할 것이다.
//   // 지금까지 버튼을 누른 횟수를 1 증가시킴
//   // #num인 박스에 그 숫자를 입력
// // 바닐라자바스크립트 문법
// var count = 0;
// document.getElementById("btn").onclick = function(){
//   count++;
//   document.getElementById("num").innerHTML = count;
// }

// // 제이쿼리 문법
// var count = 0;
// $("#btn").click(function(){
//   count++;
//   $("#num").text(count);
// });

// // [대입 연산자]
// var a = 3;
// a = a + 1;
// a += 1;
// a++; // 284, 285, 286 같은 말

// a = a + 3;
// a +=3; // 같은 말, a++은 1씩 늘어날 때만 사용