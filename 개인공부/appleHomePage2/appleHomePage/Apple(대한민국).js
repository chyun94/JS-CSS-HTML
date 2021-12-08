// 토글버튼 변수에 아래 클레스를 가진 메뉴에 연결
const togglebtn = document.querySelector('.toggle');
const menu = document.querySelector('.navbar_menu');
// const icons = document.querySelector('.navbar_icons');

// 이벤트 처리
togglebtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    // icons.classList.toggle('active');
    });

// toggle디자인 (햄버거 메뉴)
const menutoggle = document.querySelector('.toggle');
            menutoggle.onclick = function(){
            menutoggle.classList.toggle('active');
        }   

//  section - 1 slide banner
var appleimg = document.querySelector('#img1');
var appleimg2 = document.querySelector('#img2');
var appleimg3 = document.querySelector('#img3');
var tick = 2500;    // 1000 = 1s
var imgIndex = -1;
var stop_img = setInterval(img1,tick);
var stop_img2 = setInterval(img2,tick);
var stop_img3 = setInterval(img3,tick);
// var clearInterval = clearInterval(prev);
// var clearInterval = clearInterval(next);

//  자동 슬라이드 시작
function img1(){
    if(imgIndex<2){
        imgIndex++;
    }else{
        imgIndex= 0;
    }
    appleimg.style.left = imgIndex*-100+"%";
    // console.log(imgIndex);
}
// //  이전 페이지
// function prev(){
//     clearInterval(stop_img);
//     if(imgIndex==0){
//         imgIndex=2;
//     }else{
//         imgIndex--;
//     }
//     appleimg.style.left = imgIndex*-500+"px";
//     // console.log(imgIndex);
// }
// //  다음 페이지
// function next(){
//     clearInterval(stop_img);
//     if(imgIndex<2){
//         imgIndex++;
//     }else{
//         imgIndex= 0;
//     }
//     appleimg.style.left = imgIndex*-500+"px";
//     // console.log(imgIndex);
// }
function img2(){
    if(imgIndex<1){
        imgIndex++;
    }else{
        imgIndex=0;
    }
    appleimg2.style.left = imgIndex*-100+"%";
}
function img3(){
    if(imgIndex<1){
        imgIndex++;
    }else{
        imgIndex=0;
    }
    appleimg3.style.left = imgIndex*-100+"%";
}