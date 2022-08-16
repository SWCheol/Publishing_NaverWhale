/* 헤더 메뉴 */
let header = document.getElementById('header');
let gnb = document.querySelector('.gnb');
let gnbSub = document.querySelector('.gnbSub');
let gnbSubHeight = gnbSub.scrollHeight;

gnb.addEventListener('mouseover',() => {
    gnbSub.style.height = gnbSubHeight + 'px';


});

gnb.addEventListener('mouseleave', () => {
    gnbSub.style.height = '0px';
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