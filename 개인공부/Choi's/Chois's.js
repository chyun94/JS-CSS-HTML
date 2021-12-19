// 마우스 따라다니는 효과
const mouse = document.querySelector(".mouse");

document.addEventListener("mousemove", (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    mouse.style.left = mouseX + 'px';
    mouse.style.top = mouseY + 'px';
});

// 토글버튼 변수에 아래 클레스를 가진 메뉴에 연결
const togglebtn = document.querySelector('.toggle');
const menu = document.querySelector('.navbar_menu');

// 이벤트 처리
togglebtn.addEventListener('click',()=>{
menu.classList.toggle('active');
// console.log("click");
});

// toggle디자인 (햄버거 메뉴)
const menutoggle = document.querySelector('.toggle');
    menutoggle.onclick = function(){
    menutoggle.classList.toggle('active');
    // console.log("click");
}   
