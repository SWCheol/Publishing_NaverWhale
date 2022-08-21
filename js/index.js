/* 헤더 메뉴 */
let body = document.querySelector('body');
let header = document.getElementById('header');
let gnb = document.querySelector('.gnb');
let gnbSub = document.querySelector('.gnbSub');
let gnbSubHeight = gnbSub.scrollHeight;
let scrollDown = document.querySelector('.scrollDown');

gnb.addEventListener('mouseover',() => {
    gnbSub.style.height = gnbSubHeight + 'px';
});

header.addEventListener('mouseleave', () => {
    gnbSub.style.height = '0px';
});

window.addEventListener('scroll', () => {
    if(scrollY > 500) {
        scrollDown.style.display = 'block';
    } else {
        scrollDown.style.display = 'none';
    }
});


/* 햄버거 메뉴 */
let hamburger = document.querySelector('.hamburger');
let gnbMobile = document.querySelector('.gnbMobile');
let black = document.querySelector('.black');

hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle('active');
    gnbMobile.classList.toggle('active');
});

black.addEventListener('click',() => {
    hamburger.classList.remove('active');
    gnbMobile.classList.remove('active');
});