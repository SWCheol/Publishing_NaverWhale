/* 헤더 메뉴 */
let gnb = document.querySelector('.gnb');
let gnbSub = document.querySelector('.gnbSub');
let gnbSubHeight = gnbSub.scrollHeight;
let scrollDownload = document.querySelector('.scrollDown');

gnb.addEventListener('mouseover',() => {
    gnbSub.style.height = gnbSubHeight + 'px';
});

gnb.addEventListener('mouseleave', () => {
    gnbSub.style.height = '0px';
});

window.addEventListener('scroll', () => {
    if(document.documentElement.offsetWidth > 980 && scrollY > 500) {
        scrollDownload.style.display = 'block';
    } else {
        scrollDownload.style.display = 'none';
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

/* 모바일 메뉴 */
let plus = document.querySelectorAll('.plus');

for(ele of plus) {
    ele.addEventListener('click',(e) => {
        let li = e.target.parentElement.parentElement.children;

        if(e.target.parentElement.classList.contains('active')) {
            e.target.parentElement.classList.remove('active');
        } else {
            for(ele of li) {
                ele.classList.remove('active');
            }
            e.target.parentElement.classList.add('active');
        }
    });
}

// /* 슬라이드 */
// let contents = document.querySelectorAll('.contents');

// let slide = e => {
//     console.log('드래그 ' + e.pageX);
// };

// let locate = e => {
//     console.log('위치 ' + e.clientX);
// };

// for(let i = 1; i < contents.length - 1; i++) {
//     contents[i].addEventListener('mousedown',() => {
//         contents[i].addEventListener('mousemove', slide);
//         contents[i].addEventListener('mouseup', e => {
//             contents[i].removeEventListener('mousemove', slide);
//             locate(e);
//         });
//     });
// }