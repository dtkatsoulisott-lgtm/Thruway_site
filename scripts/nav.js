const nav = document.getElementById('nav');
const logo = document.getElementById('logo');
let navList = document.querySelector('.header-list');
let hamburger = document.querySelector('.hamburger')
let mobileButton = document.querySelector('.mobile-nav-button')

let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (lastScroll < window.scrollY) {
        nav.classList.add('collapse'); 
        logo.classList.add('collapse'); 
        navList.classList.remove('open');
        navList.classList.add('collapse');
        hamburger.classList.add('collapse');
        mobileButton.classList.remove('opened');
    } else {
        nav.classList.remove('collapse');
        logo.classList.remove("collapse");
        navList.classList.remove('collapse');
        hamburger.classList.remove('collapse');
    }
    // console.log(window.scrollY);
    lastScroll = window.scrollY;
});