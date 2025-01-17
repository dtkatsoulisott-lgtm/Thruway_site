const nav = document.getElementById('nav');
const logo = document.getElementById('logo');

let lastScroll = 0;

window.addEventListener('scroll', () => {
    if (lastScroll < window.scrollY) {
        nav.classList.add('collapse'); 
        logo.classList.add('collapse'); 
    } else {
        nav.classList.remove('collapse');
        logo.classList.remove("collapse")
    }
    // console.log(window.scrollY);
    lastScroll = window.scrollY;
});