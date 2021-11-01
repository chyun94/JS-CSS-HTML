// 함수 function
// 함수는 데이터를 전달받아 처리한 후 결과를 반환(return)하는 기능 단위.
// 1. 이미 만들어져 있는 자바스크립트 내장 함수 (prompt, confirm, write 등)
// 2. 사용자가 직접 구성하여 만드는 사용자 정의 함수
// 두 가지로 나뉜다.

// #함수의 기본형태
// function 함수이름(재료1, 재료2,,,)
// {
//    실행문1
//    실행문2 ...
//    return 결과   
// }


// 1. function : 함수의 선언을 표시하는 키워드
// 2. 함수이름 : 개발자가 정하는 함수의 목적에 맞는 이름
// 3. 재료1,2,3 : 함수를 호출(사용)하는 곳으로부터 값을 받는 변수 (=매개변수)
// 4. 실행문 : 함수의 작업을 실행하는 자바스크립트 코드
// 5. return : 함수의 실행을 종료하고 호출한 곳으로 되돌아 가면서 함수의 실행 결과를 반환한다.

// 함수를 만들때 주의사항
// 함수의 이름이 기존에 있는 함수나 변수 키워드와 겹치지 않게 해야함.
var x = add1(10,8);
console.log(x);

var x2 = add2(10,5);
console.log(x2);

var x3 = add3();
console.log(x3);

var x4 = add4();
console.log(x4);

function add1(){
    
}
console.log(a+b);

function add2(a,b){
    x=a+b;
}
console.log(a+b);

function add3(){
    return 30;
}
console.log(a+b);

function add4(){
}
console.log(a+b);
