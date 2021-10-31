/*
input (입력을 한 후) -> function f: (함수를 통해서) -> output 출력을 한다
*/
// 1. Function
// 여러번 재사용 가능
// 한 가지 테스트나 값을 계산하기 위해 존재함
// 하나의 함수는 한 가지의 일만 하도록 만들어야 한다.
// 함수는 동작해야 하는 목적이기 때문에 동사로 이름을 정해야한다 (command,varb) ex)changeName
// function은 오브젝트이다.

function printHello(){
    console.log('Hello');
}
printHello();

// 위의 함수는 파라메터가 없어서 'Hello' 밖에 출력이 안된다. 
//그러므로 아래의 예제처럼 파라미터로 메세지를 전달하는 것 을 보자

function  log(message){
    console.log(message);
}
log('Hello!@#$%');
log(1234);
// 자바스크립트에서는 타입이 없다 (탑입이란 int인지 string를 말하는 것)
// 이걸 말하는 이유는 출력시 직접 사용자가 문자인지 숫자인지 정할 수 있다. 정도만 알면 될 듯

// 2. Parameters
// 프리미티브 타입(메모리에 벨류가 그대로 저장됨) 즉, 벨류가 그대로 전달
// 오브젝트는 메모리에 레퍼렌스가 저장되어 레퍼렌스가 전달 됨

// 아래의 함수는 changeName이라는 function은 전달된 obj의 이름을 무조건 'coder'로 변경하는 함수이다.
function changeName(obj){
    obj.name = 'coder';
}
const choi = {name:'choi'};
changeName(choi);
console.log(choi);

// 3. Default parameters
// 아래의 예제를 보면 메세지와 프롬이라는 파라미터를 받아온다.
function showMessage(message,from){
    console.log('${message} by ${from}');
}
// 그러나 아래는 hi라는 메세지만 출력을 하고 from이라는 값은 출력하지 않기 때문에 콘솔 창에는 undefine이 출력되게 된다.
showMessage('Hi');
// 이를 해결하기 위해서는 아래의 예제를 보자

function showMessage(message,from){
    if(from === undefined){
        from = 'choi';
    }
    console.log('${message} by ${from}');
}
showMessage('hi(message)');

// 위의 예제를 좀 더 코딩하는 사람처럼 바꿔보면
function showMessage(message,from = 'choi'){
    console.log('${message} by ${from}');
}
showMessage('hi(message)');

// 4. Rest parameters 
// ...은 배열의 형식으로 출력을 해주는 파라미터
function printAll(...args){
    for(let i=0; i < args.length; i++){
        console.log(args[i]);
    }
    // 위의 포문을 좀 더 간단히
    for (const arg of args){
        console.log(arg);
    }
    // 위의 포문을 좀 더 간단히
    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','choi');

// 5. Local scope
// 밖에선 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global';           // 전역 변수
function printMessage(){
    let message = 'hello';              
    console.log(message);               // 지역 변수(함 수 안에서만 접근 가능)
    console.log(globalMessage);
}
printMessage();
// 아래는 출력이 안됨 왜냐, 지역 변수를 출력하려 했기 때문이다
console.log(message);

// 6. Return
function sum(a,b){
    return a+b;
}
const result = sum(1,2);    //3
console.log('sum: ${sum(1,2)}');

// 7. Early return, early exit
// bad (가독성이 떨어짐)
function upgradeUser(user){
    if (user.point > 10){
    }
}

//good (조건이 맞지 않을 시 바로 리턴하게 하는 식, 값이 언디파인 값이 - 인 경우)
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
}

// Function Expression
// 기능은 변수 할당, 파라미터 전달, 리턴값으로 리턴이 된다
const print = function () { // 함수에 이름이 없는 것을 anonymous function/named function
    console.log('print');
};
print();
const printAgin = print;
printAgin();
const symAgin = sum;
console.log(sumAagin(1,3));

// Callback
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love u'){
        printYes();
    }else{
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};
// named function
//더 나은 디버깅 할 때
const printNo = function print(){
    console.log('No!');
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love u',printYes,printNo);

// Arrow function
// 함수를 매우 간결히 만들어주는 함수
// 이름이 없는 함수이다 
// 아래의 예제를 보자

const simplePrint = function(){
    console.log('simplePrint');
};

// 위의 함수를 arrow function을 사용하면

const simplePrint = () => console.log('simplePrint');
// 가 가능하게 된다. 또 다른 예제를 들어보자

// function expression으로 바꾸면
const add = function (a,b) {
    return a+b;
}
// 위와 같이 되는데 arrow function을 사용하면 아래와 같이 가능하다.
const add = (a,b) => a+b;
// 그런데 좀 더 기능을 추가해야 하는 상황이 오게 된다면 (아래 기능은 더하기가 아닌 곱하기로 해보자)
const add = (a,b) => {
    return a * b;
};
// 위와 같이 리턴을 해줘야 한다.


// IIFE
// 함수를 선언 시 바로 호출을 하는 방법
(function hello(){
    console.log('IIFE');
})();
// 위와 같이 function을() 로 묶어준다.