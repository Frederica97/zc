"use strict";
const gallery_01 = document.getElementById("01");
const gallery_02 = document.getElementById("02");
const gallery_03 = document.getElementById("03");
const gallery_04 = document.getElementById("04");
const gallery_05 = document.getElementById("05");
const gallery_06 = document.getElementById("06");
const gallery = document.getElementById("Container-gallery");
const phase_01 = document.getElementById("phase-01");
const phase_02 = document.getElementById("phase-02");
const phase = document.getElementById("Container-phase");
// const gallery: HTMLCollection = document.getElementsByClassName("Container-gallery");
const gallery_set = [
    gallery_01,
    gallery_02,
    gallery_03,
    gallery_04,
    gallery_05,
    gallery_06
];
function hover(element) {
    if (element) {
        element.addEventListener('mouseover', () => {
            let pattern = "";
            for (let i = 0; i < gallery_set.length; i++) {
                if (gallery_set[i] == element) {
                    pattern += " 25fr";
                }
                else {
                    pattern += " 1fr";
                }
            }
            if (gallery) {
                gallery.style.gridTemplateColumns = pattern;
                gallery.style.transition = "all 1s";
            }
        }, false);
    }
}
function hoverPhase(element) {
    if (element) {
        let pattern = "";
        let modify = phase_01;
        if (element == phase_01) {
            pattern = "4fr 1fr";
            modify = phase_02;
        }
        else {
            pattern = "1fr 4fr";
        }
        element.addEventListener('mouseover', () => {
            if (phase) {
                console.log(element);
                console.log(pattern);
                phase.style.gridTemplateColumns = pattern;
                phase.style.columnGap = "10%";
                phase.style.transition = "all 1.5s";
            }
            if (modify) {
                modify.setAttribute('style', 'font-size: 10px !important');
                modify.style.transition = "all 1.5s";
                modify.style.opacity = "0.3";
                let text = element.getElementsByClassName("des-text");
                for (let i = 0; i < text.length; i++) {
                    const t = text[i];
                    t.style.fontSize = "10px";
                    t.style.marginTop = "0px";
                    t.style.lineHeight = "1";
                    t.style.transition = "all 1.5s";
                }
            }
        }, false);
    }
}
function hoverOverPhase(element) {
    let modify = phase_01;
    if (element == phase_01) {
        modify = phase_02;
    }
    element.addEventListener('mouseleave', () => {
        if (phase) {
            console.log("should work");
            phase.style.display = "grid";
            phase.style.gridTemplateColumns = "1fr 1fr";
            phase.style.columnGap = "15%";
            phase.style.transition = "all 1s";
            if (modify) {
                modify.setAttribute('style', 'font-size: 16px !important');
                modify.style.transition = "all 1s";
                modify.style.opacity = "1";
                let text = element.getElementsByClassName("des-text");
                for (let i = 0; i < text.length; i++) {
                    const t = text[i];
                    t.style.fontSize = "18px";
                    t.style.marginTop = "10px";
                    t.style.lineHeight = "1.5";
                    t.style.transition = "all 1s";
                }
            }
        }
    }, false);
}
function refresh() {
    hover(gallery_01);
    hover(gallery_02);
    hover(gallery_03);
    hover(gallery_04);
    hover(gallery_05);
    hover(gallery_06);
    hoverPhase(phase_01);
    hoverPhase(phase_02);
    hoverOverPhase(phase_01);
    hoverOverPhase(phase_02);
}
refresh();
