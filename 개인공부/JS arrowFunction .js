//ArrowFunction

// function sum(num1,num2){
//     return num1+num2;
// }
// function와 식별자를 지운 후
const sum = (num1, num2) => num1+num2; 

const result = sum(10,20);
console.log(result);

const pow = x => x*x;
const result = pow(10);
console.log(result);
