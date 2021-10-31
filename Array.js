// Array

// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1,2];
//배열은 Index 기준으로 저장이 됨

// 2. 배열 접근
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);
// 배열의 마지막 값 찾는 법
console.log(fruits[fruits.length-1]);

// 3.Looping 배열안의 데이터 전체 출력 방법
// for loop
// for(let i = 0; 1< fruits.length; i++){
//     console.log(fruits[i]);
// }

// for of
for(let fruit of fruits){
    console.log(fruit);
}
// forEach
fruits.forEach((fruit) =>console.log(fruit));


console.log(clear);

