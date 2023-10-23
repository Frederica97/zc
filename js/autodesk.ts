const ad_01: HTMLElement = <HTMLElement>document.getElementById("01");
const ad_02: HTMLElement = <HTMLElement>document.getElementById("02");
const ad_03: HTMLElement = <HTMLElement>document.getElementById("03");
const ad_04: HTMLElement = <HTMLElement>document.getElementById("04");
const ad_05: HTMLElement = <HTMLElement>document.getElementById("05");
const ad_06: HTMLElement = <HTMLElement>document.getElementById("06");
const ad_07: HTMLElement = <HTMLElement>document.getElementById("07");
const ad_08: HTMLElement = <HTMLElement>document.getElementById("08");
const ad_09: HTMLElement = <HTMLElement>document.getElementById("09");
const ad_10: HTMLElement = <HTMLElement>document.getElementById("10");
const ad_11: HTMLElement = <HTMLElement>document.getElementById("11");
const ad_12: HTMLElement = <HTMLElement>document.getElementById("12");
const ad_13: HTMLElement = <HTMLElement>document.getElementById("13");


const ad01: HTMLElement = <HTMLElement>document.getElementById("Container-AD01");
const ad02: HTMLElement = <HTMLElement>document.getElementById("Container-AD02");


const ad01_set: HTMLElement[] = [
    ad_01,
    ad_02,
    ad_03,
    ad_04,
    ad_05,
    ad_06
];
const ad02_set: HTMLElement[] = [
    ad_07,
    ad_08,
    ad_09,
    ad_10,
    ad_11,
    ad_12,
    ad_13
];

function hoverAD01(element: HTMLElement) {
    if (element) {
        element.addEventListener('mouseover', () => {
            let pattern: string = "";
            for (let i = 0; i < ad01_set.length; i++) {
                if (ad01_set[i] == element) {
                    pattern += " 30fr";
                    element.classList.add('still01');
                } else {
                    pattern += " 1fr";
                    ad01_set[i].classList.remove('still01');
                }
            }
            if (ad01) {
                ad01.style.gridTemplateColumns = pattern;
                ad01.style.transition = "all 1s";
            }

        }, false);
    }
}
function hoverAD02(element: HTMLElement) {
    if (element) {
        element.addEventListener('mouseover', () => {
            let pattern: string = "";
            for (let i = 0; i < ad02_set.length; i++) {
                if (ad02_set[i] == element) {
                    pattern += " 38fr";
                    element.classList.add('still02');
                } else {
                    pattern += " 1fr";
                    ad02_set[i].classList.remove('still02');
                }
            }
            if (ad02) {
                ad02.style.gridTemplateColumns = pattern;
                ad02.style.transition = "all 1s";
            }
        }, false);
    }
}

function setHeight(){
    const stillImage01 = document.getElementsByClassName("still01") as HTMLCollectionOf<HTMLElement>;
    const AD01Width = stillImage01[0].clientWidth; 
    const AD01Set = ad01.getElementsByClassName("gallery-image-wrap-AD") 
    const newHeight01 = String(AD01Width*(9/16) + "px")
    for (let i = 0; i < AD01Set.length; i++) {
        ad01_set[i].style.height = newHeight01;
    }
    const stillImage02 = document.getElementsByClassName("still02") as HTMLCollectionOf<HTMLElement>;
    const AD02Width = stillImage02[0].clientWidth; 
    const AD02Set = ad02.getElementsByClassName("gallery-image-wrap-AD") 
    const newHeight02 = String(AD02Width*(9/16) + "px")
    for (let i = 0; i < AD02Set.length; i++) {
        ad02_set[i].style.height = newHeight02;
    }
}

function refreshAD01() {
    hoverAD01(ad_01);
    hoverAD01(ad_02);
    hoverAD01(ad_03);
    hoverAD01(ad_04);
    hoverAD01(ad_05);
    hoverAD01(ad_06);
    hoverAD02(ad_07);
    hoverAD02(ad_08);
    hoverAD02(ad_09);
    hoverAD02(ad_10);
    hoverAD02(ad_11);
    hoverAD02(ad_12);
    hoverAD02(ad_13);
    setHeight();
}

window.addEventListener('resize', setHeight);

refreshAD01();
setHeight();
