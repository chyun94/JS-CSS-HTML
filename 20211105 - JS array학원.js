function pr(msg, arr) {
    document.write(msg + arr.toString() + "<br>");
    }

const a = new Array('황','김','이');
const b = new Array('박');
const c;
console.log('배열 a =',a);
console.log('배열b =' , b);
console.log('-------------');
c = a.concat(b);    //c는b를 연결한 새 배열
console.log('c=a.conaca(후) c=', c);

c = a.concat(b); // c는 a와 b를 연결한 새 배열
console.log("c = a.concat(b)후 c = ", c); // 황,김,이,박
console.log("c = a.concat(b)후 a = ", a); // 황,김이
 
c = a.join("##"); // c는 배열 a를 연결한 문자열
console.log("c = a.join() 후 c = ", c); // 황##김##이
console.log("c = a.join() 후 a = ", a); // 황,김,이
 
c = a.reverse(); // a.reverse()로 a 자체 변경. c는 배열
console.log("c= a.reverse() 후 c = ", c); // 이,김,황
console.log("c= a.reverse() 후 a = ", a); // 이,김,황
 
c = a.slice(1, 2); // c는 새 배열
console.log("c= a.slice(1, 2) 후 c = ", c); // 김
console.log("c= a.slice(1, 2) 후 a = ", a); // 이,김,황
 
c = a.sort(); // a.sort()는 a 자체 변경. c는 배열
console.log("c= a.sort() 후 c = ", c); // 김,이,황
console.log("c= a.sort() 후 a = ", a); // 김,이
 
c = a.toString(); // toString()은 원소 사이에 ","를 넣어  문자열 생성 
console.log("a.toString() : " + c); // 김,이,황 // join처럼 사용자 정의대로 표현은 못함 무조건 ","이다