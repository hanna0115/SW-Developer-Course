var filename = [
  ["ceo.html","map.html","prize.html"],
  ["app.html","mobile.html","memory.html"]
];
var menuname1 = ["회사소개","제품소개"];
var menuname2 = [
  ["CEO인사말","오시는길","수상실적"],
  ["일반가전","모바일","메모리"]
];

var currentname = location.href;      // http://aa.com/bb/index.html
currentname = currentname.split("/"); // ["http:","","","aa.com","bb","index.html"]
var len = currentname.length;         // 5
currentname = currentname[len-1] ;    // currentname[5-1] // currentname[4] //"index.html"

var depth1;
var depth2;
for(i=0; i<filename.length; i++){ // filename 배열 개수
  for(j=0; j<filename[i].length; j++){ // filename ?번째 배열의 배열 개수
    if(currentname == filename[i][j]){
      depth1 = i; // filename ?번째
      depth2 = j; // filename ?번째 배열의 ?번째
      break;
    }
  }
}

if(depth1 != undefined && depth2 != undefined){ // 둘 다 undefined가 아닌 경우에 어떤 것을 하겠다.
  var bc_1 = "<span class='caret-right'></span> <a>" + menuname1[depth1] + "</a>";
  var bc_2 = "<span class='caret-right'></span> <a href='" + currentname + "'>" + menuname2[depth1][depth2]+ "</a>";
  document.getElementById("bc_1").innerHTML = bc_1;
  document.getElementById("bc_2").innerHTML = bc_2;
}