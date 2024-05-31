var splash = document.querySelector("#splash");
var splashImage = document.querySelector("#splash-image");
var nav = document.querySelector("#Menu-home");
var main = document.querySelector("#main-content");

window.addEventListener("DOMContentLoaded", function () {
    if (splash && splashImage) {
        // init
        if (nav) {
            nav.style.opacity = "0";
        }
        if (main) {
            main.style.opacity = "0";
        }

        // rotation
        setTimeout(function () {
            splashImage.style.transform = "rotate(90deg)";
            splashImage.style.transition = "all 700ms";
        }, 300);
        setTimeout(function () {
            splashImage.style.transform = "rotate(45deg)";
            splashImage.style.transition = "all 700ms";
        }, 1300);
        setTimeout(function () {
            splash.style.opacity = "0";
            splash.style.transition = "all 300ms ease-in";
        }, 1700);

        // switch to main objects
        setTimeout(function () {
            if (nav) {
                nav.style.display = "block";
            }
            if (main) {
                main.style.display = "block";
            }
        }, 2000);
        setTimeout(function () {
            if (nav) {
                nav.style.opacity = "1";
                nav.style.transition = "all 300ms ease-out";
            }
            if (main) {
                main.style.opacity = "1";
                main.style.transition = "all 300ms ease-out";
            }
        }, 2300);
    }
});
