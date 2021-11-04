// 주어진 배열을 문자열로 변형하기
{
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join('+','+');
console.log(result);
}
// 주어진 문자열을 array로 변환하기
{
const fruits2 = 'apple, kiwee, banana, cherry';
//  string을 배열로 만드는 방법 split라는 api가 배열로 만들어 줘요
// const result2 = fruits2.split(',',2); limit이라는 함수 인데 앞의 두 가지만 전달 받으려면 이렇게 작성하면 됩니다
const result2 = fruits2.split(',');
console.log(result2);
}

{
    //주어진 배열의 순서를 거꾸로 만드는 방법
    const array = [1,2,3,4,5];
    const result = array.reverse();
    // const result = array.join();
    console.log(result);
    console.log(array);
}

{
    //  주어진 배열에서 첫번째 두 번째를 제외한 나머지를 배열로 만드는 방법
    const array = [1,2,3,4,5];
    // index0부터 2개를 삭제 하겠다 라는 식을 써주면 됩니다.
    // 그런데 마지막을 4로 하면 4가 배제가 되기 때문에 5를 작성하여 4까지 출력하게 해줍니다.
    const result = array.slice(2,5);
    console.log(result);
    console.log(array);
}

// class를 이용한 배열 
class Student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this. score = score;
    }
}
const students =[
    new Student('A',29,true,45),
    new Student('B',29,true,80),
    new Student('C',29,false,90),
    new Student('D',29,true,66),
    new Student('E',29,true,88),
];

//90점인 학생을 찾아보자
{   
    // arrow function을 이용한 식
    // const result = students.find((student) => student.score === 90);
    const result = students.find(function(student, index) {
        console.log(student,index); 
       // 학생의 점수가 true라면 리턴을 해주는 식을 써보자
        return student.score === 90;
    });
    console.log(result);
}

// 값이 true인 학생들만 찾아보자
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

//  점수만 뽑아와 보자
{
    const result = students.map((student) => student.score);
    //  점수를 두 배로 출력해 보자
    //  const result = students.map((student) => student.score *2);
    console.log(result);
}

//  점수가 50점보다 낮은 확생이 있는지 아닌지 찾아보자
{   
    // students안에 들어있는 값 중 하나라도 조건에 맞으면 true를 리턴해준다
    const result = students.some((student) => student.score<50);
    console.log(result);

    // every함수를 해주면 모두가 참이여야 하기해 false를 반환한다.
    const result2 = students.every((student) => student.score<50);
    console.log(result2);
}

//  학생들의 평균 점수를 구해보자
{   
    //reduceRight는 반대로 출력으 되게 해주는 함수이다.
    const result = students.reduce((prev, curr)=>{
        console.log('----------------------------------------------------------');
        console.log(prev);
        console.log(curr);
        console.log('----------------------------------------------------------');
        return prev + curr.score;
    },0);
    // const result = students.reduce((prev,curr) => prev+curr.score,0);
    console.log(result / students.length);
}

//  학생들의 점수를 문자열로 출력해보자
{
    // const result = students.map((student) => student.score).join();
    const result = students.map((student) => student.score).filter((score) => score <=50).join();
    console.log(result);
}

//  학생들의 점수를 낮은 점수부터 정렬을 해보자
{   
    //.join()은 출력할 때 문자열로 출력을 하게 해준다
    const result = students.map(student => student.score).sort((a,b)=>a-b).join();
    console.log(result);
}