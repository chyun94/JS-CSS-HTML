// Class와 Object
// Class
// - template
// - declare once
// - no data in

// object
// - instance of a class
// - created many TimeRanges
// - data in
//' use strict';

// Class 선언 방법
class Person{
    // constructor (생성자)
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak(){
        console.log('${this.name}: Hi');
    }
}
// obj 생성 (new를 입력해서 생성 해야 한다.)
const choi = new Person('choi', 20);
console.log(choi.name);
console.log(choi.age);
choi.speak();

console.log("====================================================");

// 2. Getter and Setters    획득자, 설정자
class User{
    constructor(firstName, lastName, age2){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age2 = age2;
    }
    get age2(){
        return this._age2;
    }
    set age2(vlaue){
        // value가 - 값이라면 0 이고 아니면 지정된 벨류를 사용 하겠다 라는 식 
        this._age2 = vlaue < 0 ? 0: vlaue;
    }
}
// class의 객체명을 꼭 가져와야 한다.
const user1 = new User('Choi', 'bee' , -1);
console.log(user1.age2);
console.log("====================================================");
// Public,Private
class Experiment{
    // 외부 접근 가능하구
    publicField = 2;
    // 클레스 내부에서만 값이 보여지구 접근이 된다. 외부에서는 변경 읽기 불가능!
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);
console.log("====================================================");

// Static
class Article{
    static publisher = 'enything';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
console.log("====================================================");
// class 이름을 호출해서 출력도 가능하다.
Article.printPublisher();

//상속과 다양성
class  shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    // ${} 사용 시에는 ``를 꼭 사용 하도록! 따옴표가 아니니 혼동X
    draw() {
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
    
}
// extends를 이용해 다른 클래스를 불러올 수 있다.
class Rectangle extends shape{
    draw() {
        super.draw();
        console.log('ㅁ');    
        console.log('-----------------------');
    }
}
class Triangle extends shape{
    //필요한 함수만 재정의 해서 사용이 가능하다. 이 방법은 오버라이딩이다
    // shape에서 하나의 함수만 수정을 해보자.
    draw() {
        super.draw();
        console.log('△');
        console.log('-----------------------');
    }
    toString(){
        return `Triangle: color ${this.color}`;
    }
    getArea(){
        return (this.width * this.height)/2;
    }
}
class Circle extends shape{
    draw() {
        super.draw();
        console.log('ㅇ');
        
    }
    getArea(){
        return (this.width * this.height)*Math.PI/10000;
        console.log('-----------------------');
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'Green');
triangle.draw();
console.log(triangle.getArea());

const circle = new Circle(100,100, 'Yellow');
circle.draw();
console.log(circle.getArea());

// instanceOf
// ture와 false 리턴하는 것
console.log(rectangle instanceof Rectangle);
//ㄴ> 렉탱글의 오브젝트는 렉텡글 클레스의 오브젝트이다 (참)
console.log(triangle instanceof Rectangle);
//ㄴ> 트라이엥글은 렉텡글 클레스의 오브젝트이다 (거짓)
console.log(triangle instanceof Triangle);
//ㄴ> 트라이엥글은 트라이엥글 클레스의 오브젝트이다 (참)
console.log(triangle instanceof shape);
//ㄴ>트라이엥글은 쉐입 클레스의 오브젝트이다 (참) 상속 했으니
console.log(triangle instanceof Object);
//ㄴ> 트라이엥글은 오브젝트의 인스턴스다 (참)
console.log(triangle.toString());

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference