// Array

// 1. 배열 선언
const arr1 = new Array();
const arr2 = [1,2];
// 배열은 Index 기준으로 저장이 됨 그러므로 인덱스를 활용하여
// 데이터의 삽입 삭제가 가능하다

// 2. 인덱스를 통한 배열 접근
const fruits = ['apple','banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); 
console.log(fruits[2]); //-> 베열의 저장은 0부터 이기때문에 undefined로 출력됨
// 배열의 마지막 값 찾는 법
console.log(fruits[fruits.length-1]);

// 3.for문을  통한 Looping 배열안의 데이터 전체 출력 방법
for(let i = 0; 1< fruits.length; i++){
    console.log(fruits[i]);
}
// for of 를 사용하는 방법도 있다.
for(let fruit of fruits){
    console.log(fruit);
}
//  forEach를 사용하면 더욱 간단히 가능하다.
//  forEach는 콜벡 함수를 사용한다.
// fruits.forEach(function (fruit, index, array){
//     console.log(fruit, index, array);
// })
// 위의 코드를 arrowfunction을 사용하여 간단히 해보자
fruits.forEach((fruit) =>console.log(fruit));
console.log(clear);

//  배열에 데이트 삽입 뺴고 복사 하는 방법
// Add
    fruits.push('strawberry','pitch');
    console.log(fruits);
// Remove
    fruits.pop();
    fruits.pop();
    console.log(fruits);

// 중간에서 뺴는 방법
fruits.unshift('','');

// 앞에서 빼는 방법 
fruits.shift();
fruits.shift();
console.log(fruits);

