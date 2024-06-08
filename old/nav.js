var splash = document.querySelector('#splash');
var splashImage = document.querySelector('#splash-image');
var nav = document.querySelector('#Menu-home');
var page = document.querySelector('#page');
var main = document.querySelector('#main-content');

window.addEventListener('DOMContentLoaded', function () {
    if (splash && nav && main || splash && nav && page) {
        nav.style.opacity = "0";
    }
    setTimeout(function () {
        if (splashImage) {
            splashImage.style.transform = 'rotate(90deg)';
            splashImage.style.transition = 'all 700ms';
        }
    }, 300);
    setTimeout(function () {
        if (splashImage) {
            splashImage.style.transform = 'rotate(45deg)';
            splashImage.style.transition = 'all 700ms';
        }
    }, 1300);
    setTimeout(function () {
        if (splash) {
            splash.classList.add('fade');
            splash.style.display = "none";
        }
    }, 2500);
    setTimeout(function () {
        if (nav && page) {
            nav.style.opacity = "1";
            page.style.opacity = "1";
            page.style.transition = 'all 500ms';
        }
        if (nav && main) {
            nav.style.opacity = "1";
            main.style.opacity = "1";
            main.style.transition = 'all 500ms';
        }
    }, 2200);
});
