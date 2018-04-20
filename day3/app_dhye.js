/*****************************************************************************
 * 신다혜 과제 
 *****************************************************************************/
/* [문제 1]
 * 스타일 변경에 책임을 갖는 css 함수를 만들어라. 
 */
getElementById('input-color')
  .addEventListener('change', function(e) {
    changeCss('content', 'color', e.target.value);
  });
getElementById('input-font-size')
  .addEventListener('change', function(e) {
    changeCss('content', 'fontSize', e.target.value);
  });
getElementById('input-color-test')
  .addEventListener('change', function(e) {
    changeCss('test', 'color', e.target.value);
  });
function changeCss(id, cssAttr, value){
    getElementById(id).style[cssAttr] = value;
}


/* [문제 2]
 * 아래 결과를 만족하는 sum 함수를 작성하라. 
 */
function sum(num1){
  return function(num2) { return num1 + num2; } 
}
console.log(sum(5)(10));
console.log(sum(20)(10));
console.log(sum(1)(4));



/* [문제 3]
 * 아래 결과를 만족하는 함수 typeToKor 를 작성하라. 
 */
function typeToKor(value){
  function typeCheck(type){
    return typeof(value) === type;
  }
  
  if( typeCheck('number') ){
    return '숫자';
  } else if( typeCheck('string') ){
    return '문자';
  } else if( typeCheck('boolean') ){
    return '참거짓';
  } else if( typeCheck('object') ){
    return '객체';
  }
  
}
console.log(typeToKor(5));
console.log(typeToKor('ㅎㅎㅎㅎ'));
console.log(typeToKor(true));
console.log(typeToKor({}));


/* [문제 4]
 * 4개의 숫자를 인자로 받아 가장 큰 숫자를 반환하는 함수 biggest 를 작성하라. 
 */
function biggest(num1, num2, num3, num4){
  var numArray = [num1, num2, num3, num4];
  var maxNum = 0;
  
  for( var i=0; i < numArray.length; i++ ){
   if( maxNum < numArray[i] ){
      maxNum = numArray[i];
    }
  }

  return maxNum;
}
console.log(biggest(4, 5, 2, 1));
console.log(biggest(4, 5, 7, 10));
console.log(biggest(44, 15, 27, 11));
console.log(biggest(244, 315, 217, 11));


/* [추가 문제]
 * 폰트 크기 늘리고 줄이기 
 */
function changeFontSize(){
  var content = getElementById('content');
  var contentStyle = window.getComputedStyle(content);
  var currentSize = parseInt(contentStyle.fontSize);

  getElementById('btn-font-up').addEventListener('click', function(e){
    fontSize(e.target);
  });
  getElementById('btn-font-down').addEventListener('click', function(e){
    fontSize(e.target);
  });

  function fontSize(target){
    var attrId = target.getAttribute('id');

    // content에 text가 없을때
    if( content.innerText == '' ){
      return false;
    }

    // btn-font-up 버튼 클릭 시
    if( attrId === 'btn-font-up' ){
      sizeUp();
    }

    // btn-font-down 버튼 클릭 시
    if( attrId === 'btn-font-down' ){
      sizeDown();
    }

    // font size up
    function sizeUp(){
      currentSize++;
      changeCss('content', 'fontSize', currentSize+'px');
      //console.log(currentSize);
    }

    // font size down
    function sizeDown(){
      currentSize--;
      changeCss('content', 'fontSize', currentSize+'px');
    }
  }
}
changeFontSize();


/*****************************************************************************
 * 1. text를 받아서 그 text로 alert을 띄우는 popup 함수를 만들어라
 * 2. iPhone 일 때는 '아이폰' 이라는 문자열을 popup 해라
 * 3. Android 일 때는 '안드로이드' 라는 문자열을 popup 해라
 * 4. 둘다 아닐 때는 '기타'라는 문자열을 popup해라
 */
function abc(selector) {
  if ('id') {
    return 'getElementById'
  }
  if('class') {
    return 'getElementsByClassName'
  }
}
function getElementById(id) {
  return document.getElementById(id);
}
function dg(selector) {
  return document[abc(selector)](selector);
}
getElementById('btn').addEventListener('click', app);
function popup(text) {
  alert(text);
}

// function changeColor(id, color) {
//   getElementById(id).style.color = color;
// }
// function changeFontSize(fontSize) {
//   getElementById('content').style.fontSize = fontSize;
// }
function draw(deviceName) {
  getElementById('content').innerText = deviceName;
}
/*var navigator = {
  userAgent: {
    match: function() {
    }
  }
}*/
function isIPhone() {
  return navigator.userAgent.match(/iPhone/);
}
function isAndroid() {
  return navigator.userAgent.match(/Android/);
}
function app() {
  if (isIPhone()) {
    return draw('아이폰');
  }
  if(isAndroid()) {
    return draw('안드로이드');
  }

  return draw('기타');
}
// app();


