/*==================== Mouse design(따라다니는거) ====================*/
const mouse = document.querySelector(".mouse");

document.addEventListener("mousemove", (e) => {

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    mouse.style.left = mouseX + 'px';
    mouse.style.top = mouseY + 'px';
});

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*===== 메뉴 보이기 =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

/*===== 메뉴 숨김 =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

/*==================== 반응형일시 메뉴 닫기 ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== 스킬(드롭) ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
        skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className
    
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== 학력,경력 ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');
        
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    })
})

/*==================== 서비스 모달 ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== 포트폴리오 스와이프  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
let swiperPortfolio_second = new Swiper('.portfolio__container_second', {
    cssMode: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    // 스크롤값 가져오기
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*==================== 다크모드시 헤더 변환 ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); 
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    let scrollTop = document.getElementById('scroll-top');
    // 스크롤이 지정 위치보다 높을 시scroll-top 에 show스크롤 추가
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); 
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

/*==================== 어두운 태마 ====================*/ 
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// 사용자,이전 선택시 객체화 시켜주기
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// 다크모드, 라이트모드 비교(아이콘 변경)
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// 다크모드 활성,비활성 유무 체크(?)
if (selectedTheme) {    // 테마 선택해서 가져오기
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// 버튼 클릭 활성,비활성
themeButton.addEventListener('click', () => {
    // 다크모드,아이콘
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // 아이콘별로 모드 성정
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});