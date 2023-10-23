const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('section');
const infoSelection = <HTMLElement>document.getElementById("section-info")
const sideDiv = <HTMLElement>document.getElementById("side-nav")
const sideDivContent = document.getElementById('side-nav-content')

function addLink(){
    if(sections){
        for (let i = 0; i < sections.length; i++) {
            dots[i].addEventListener('click', () => {
                sections[i].scrollIntoView({ behavior: 'smooth' });
            });
        }
    }
}

function isElementInViewport(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= window.innerHeight && rect.bottom >= 0 &&
        rect.left <= window.innerWidth && rect.right >= 0
    );
}
function updateSideBar(){
    if (dots){
        if (sideDivContent){
            if (isElementInViewport(sideDivContent)) {
                dots.forEach((dot) => {dot.removeAttribute("hidden");}); 
            }else{
                dots.forEach((dot) => {dot.setAttribute("hidden", "true")});
            }
        }
    }
    dots.forEach((dot) => { dot.classList.remove("active")});
    for (let i = 0; i < sections.length; i++) {
        const sectionOnScreen = sections[i].getBoundingClientRect().top;
        if (sectionOnScreen < 10) {
            dots[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll', () => {
    updateSideBar()
})

addLink()
updateSideBar()


const next: HTMLElement = <HTMLElement>document.getElementById("Container-next");
const prev: HTMLElement = <HTMLElement>document.getElementById("Container-prev");

function hoverPrev(element: HTMLElement) {
    let image = element.getElementsByClassName("image-80") as HTMLCollectionOf<HTMLElement>
    let img = image[0]
    if (element) {
        element.addEventListener('mouseover', () => {
            element.style.transition = "all 2s";
            element.style.left = "-80px";
            element.style.opacity = "100%";
            img.style.filter = "grayscale(1%)";

        }, false);
    }
}
function hoverNext(element: HTMLElement) {
    let image = element.getElementsByClassName("image-80") as HTMLCollectionOf<HTMLElement>
    let img = image[0]
    if (element) {
        element.addEventListener('mouseover', () => {
            element.style.transition = "all 2s";
            element.style.right = "-80px";
            element.style.opacity = "100%";
            img.style.filter = "grayscale(1%)";

        }, false);
    }
}
function hoverOverPrev(element:HTMLElement){
    let image = element.getElementsByClassName("image-80") as HTMLCollectionOf<HTMLElement>
    let img = image[0]
    if (element) {
        element.addEventListener('mouseleave', () => {
            element.style.left = "0px";
            element.style.transition = "all 1s";
            element.style.opacity = "50%";
            img.style.filter = "grayscale(100%)";

        }, false);
    }
}
function hoverOverNext(element:HTMLElement){
    let image = element.getElementsByClassName("image-80") as HTMLCollectionOf<HTMLElement>
    let img = image[0]
    if (element) {
        element.addEventListener('mouseleave', () => {
            element.style.right = "0px";
            element.style.transition = "all 1s";
            element.style.opacity = "50%";
            img.style.filter = "grayscale(100%)";

        }, false);
    }
}

function refreshNextPrev() {
    hoverPrev(prev);
    hoverOverPrev(prev);
    hoverNext(next);
    hoverOverNext(next);
}

refreshNextPrev()


