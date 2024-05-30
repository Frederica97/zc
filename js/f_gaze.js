// const gazes = document.getElementsByClassName("Container-gaze");
// const freezedOnce = Array.from({length: gazes.length}, () => false);

// let isScrollingDisabled = false;
// let accumulatedScroll = 0;

// function captureScrollDistance(e) {
//     accumulatedScroll += Math.abs(e.deltaY);
//     if (accumulatedScroll < 1500) {
//         e.preventDefault();
//     } else {
//         window.removeEventListener("wheel", captureScrollDistance, {
//             passive: false,
//         });
//         isScrollingDisabled = false;
//         accumulatedScroll = 0;
//         console.log("released");
//     }
// }

// window.addEventListener("scroll", (event) => {
//     for (let i = 0; i < gazes.length; i++) {
//         const gaze = gazes[i];
//         if (freezedOnce[i] == true) {
//             continue;
//         }
//         const offsetTop = gaze.offsetTop;
//         console.log(window.scrollY, offsetTop)
//         if (window.scrollY > offsetTop-150) {
//             window.addEventListener("wheel", captureScrollDistance, {
//                 passive: false,
//             });
//             freezedOnce[i] = true;
//         }
//     }
// });