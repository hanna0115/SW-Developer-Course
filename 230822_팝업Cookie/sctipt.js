// Cookie
// 1. 클라이언트 - cookie
// 2. 서버 - cookie, section
// 둘 다 텍스트 형태 문자로 저장

// 쿠키를 저장하도록 허용 하냐 / 마냐 => 정보가 서버에 저장
// 사용자가 해당 사이트에서 어떤 행동을 했는지
// Cookie : 일정 기간동안 데이터 값을 브라우저가 내부에 값을 저장한 것
// 쿠키가 저장되는 방식 : name(이름) = value(값) 방식으로 저장

// 개발자 도구 -> Application -> Cookies(쿠키)

// 만료기간을 넣어서 쿠키가 자동 만료 되도록 코드를 작성(UTC)
// setCookie, getCookie 두가지 함수 생성
// 1. setCookie : 쿠키값을 설정
// 2. getCookie : 쿠키값을 가져오는 함수

// localstorage라는 것을 이용해서 구현할 수도 있다.

function setCookie(name, value, hours){
  // 빈 문자열로 변수 초기화 => 쿠키 만료 시간 담을 변수
  let expires = '';

  // 만약에 hours라는 값이 있다면(true)
  if(hours) {
    // date라는 변수 안에 현재 시간을 가지는 Date 객체를 생성
    let date = new Date();

    // date 값을 현재 시간 + hours(ms) 더한 값으로 set 한다.
    // 쿠키 만료시간이 hours 더한 시간만큼 뒤로 설정된다.

    // 시간을 밀리초(ms)로 변환
    // hour(시간) * 60(분) * 60(초) * 1000(밀리초)
    // javasctipt에서 시간을 다룰 때 일반적으로 밀리초(ms)로 계산한다.
    // Date 객체가 밀리초(ms) 단위로 시간을 나타내기 때문
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000))

    // ;(세미콜론)
    // 쿠키 설정은 문자열 네임과 벨류로 구성되는데,
    // 각각 이름과 값을 세미콜론으로 구분한다.
    // toUTCString() : Date 객체의 시간 => UTC 형태의 문자열로 변환
    // 쿠키 만료시간을 표준화된 방식으로 변환
    expires = '; expires' + date.toUTCString();
  }
}