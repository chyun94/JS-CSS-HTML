'use strick';
//동기와 비동기
// 즉, 호이스팅이 된 이후 코드가 작성한 순서에 맞춰 동기적으로 실행 된다는 말.
// what is hoistiong? 
// ㄴ> var변수나 function 선언 과 같이 제일 위로 올라가서 실행 되는 것
console.log('1');
// 아래를 에로우 함수로 바꾸면 setTimeout(() => console.log('2'),1000);
setTimeout(function(){
    console.log('2');
}, 1000)//1000밀리 세컨드는 1초
console.log('3');

// 위와 같이 1000밀리 세컨이 없으면 차례로 async로 출력이 되지만
// 중간에 추가를 하면 순서가 1초 뒤인 1 3 2 로 출력이 된다.
// 즉 이것이 비동기적 함수

//  콜벡은 즉각(동기)적 콜벡과
function printImmediately(print){
    print();
}
printImmediately(()=> console.log('hello'));
//  예측 불가능한 콜벡이 있다.
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'choi' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            
        }, timeout);

    }
}