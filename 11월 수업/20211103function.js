const num = 1;
const num2 = 2;
const result = num+num2;
console.log("결과값:"+result);

const num3 = 1;
const num4 = 2;
const result2 = num3+num4;

// add라는 함수를 만들어 준다.
// 즉, 아래 함수의 이름은 add 가된다.
function add(num1,num2){  //add라는 함수는 어떤 a와b라는 값을 받기
    return num1+num2;
}

// // 함수 호출하는 방법
// const sum = add(3,4);
// console.log("add함수의 sum 호출:"+sum);

// add가 가리키고 있는 값이 복사되어 doSomething에 들어가 있다.
const doSomething = add;
const result3 = doSomething(2,3);
console.log(result3);
// 함수를 다른 함수로 변경을 해보자
const result4 = add(2,3);
console.log(result4);

// 함수 인자에 대해 좀 더 알아보자
function print(name,b){
    console.log('print');
    console.log(`${name} ${b}`);
}
print(4,15,1,23,25);

// 나누기 함수를 추가해보자
function divide(num1, num2){
    return num1 / num2 ;
}

function surprise(operator){
    const result = operator(2,3);
    console.log(result);
}
// 이렇게만 하면 오퍼레이트는 함수가 아니기에 에러가 나온다
// surprise();
// 위 출력에 add 를 전달해보자
surprise(add);
// 이름을 통해서 출력을 할 수 있따.