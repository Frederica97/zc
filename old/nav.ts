const splash: HTMLElement | null = document.querySelector('#splash');
const splashImage: HTMLElement | null = document.querySelector('#splash-image');
const nav: HTMLElement | null = document.querySelector('#Menu-home');
const page: HTMLElement | null = document.querySelector('#page');
const main: HTMLElement | null = document.querySelector('#main-content');


window.addEventListener('DOMContentLoaded', () => {

  if (splash && nav && main || splash && nav && page) {
    nav.style.opacity = "0";
  }
  setTimeout(() => {
    if (splashImage) {
      splashImage.style.transform = 'rotate(90deg)'
      splashImage.style.transition = 'all 700ms'
    }
  }, 300);
  setTimeout(() => {
      if (splashImage) {
        splashImage.style.transform = 'rotate(45deg)'
        splashImage.style.transition = 'all 700ms'
      }
  }, 1300);

  setTimeout(() => {
    if (splash) {
      splash.classList.add('fade');
      splash.style.display = "none"
    }
  }, 2500);

  setTimeout(() => {
    if (nav && page) {
      nav.style.opacity = "1"
      page.style.opacity = "1"
      page.style.transition = 'all 500ms'
    }
    if (nav && main) {
      nav.style.opacity = "1"
      main.style.opacity = "1"
      main.style.transition = 'all 500ms'
    }
  }, 2200);
});