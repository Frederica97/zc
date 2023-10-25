
const workMenu : HTMLElement = <HTMLElement>document.getElementById("Menu-work");
const aboutMenu : HTMLElement = <HTMLElement>document.getElementById("Menu-about");

const contactMenu : HTMLElement = <HTMLElement>document.getElementById("Menu-contact");

const portfolio_01: HTMLElement = <HTMLElement>document.getElementById("01");
const portfolio_02: HTMLElement = <HTMLElement>document.getElementById("02");
const portfolio_03: HTMLElement = <HTMLElement>document.getElementById("03");
const portfolio_04: HTMLElement = <HTMLElement>document.getElementById("04");
const portfolio_05: HTMLElement = <HTMLElement>document.getElementById("05");
const portfolio_06: HTMLElement = <HTMLElement>document.getElementById("06");
const portfolio_07: HTMLElement = <HTMLElement>document.getElementById("07");
const portfolio_08: HTMLElement = <HTMLElement>document.getElementById("08");
const portfolio_09: HTMLElement = <HTMLElement>document.getElementById("09");
const portfolio_10: HTMLElement = <HTMLElement>document.getElementById("10");
const portfolio_11: HTMLElement = <HTMLElement>document.getElementById("11");
const portfolio_12: HTMLElement = <HTMLElement>document.getElementById("12");
const portfolio_13: HTMLElement = <HTMLElement>document.getElementById("13");
const cover: HTMLElement = <HTMLElement>document.getElementById("cover");


const portfolio: HTMLElement = <HTMLElement>document.getElementById("portfolio");


const portfolio_set: HTMLElement[] = [
    portfolio_01,
    portfolio_02,
    portfolio_03,
    portfolio_04,
    portfolio_05,
    portfolio_06,
    portfolio_07,
    portfolio_08,
    portfolio_09,
    portfolio_10,
    portfolio_11,
    portfolio_12,
    portfolio_13
];


function expand(element: HTMLElement){
    let line: HTMLElement = <HTMLElement>element.querySelector(".mark")
    line.style.height = "170px"
    line.style.width = "5px"
    line.style.transition = "all 1s";
    let info: HTMLElement = <HTMLElement>element.querySelector(".info") 
    info.removeAttribute("hidden"); 
    let grid: HTMLElement = <HTMLElement>element.querySelector(".grid")
    grid.classList.add("grid-active");
}

function collapse(element: HTMLElement){
    let line: HTMLElement = <HTMLElement>element.querySelector(".mark")
    line.style.height = "10px"
    line.style.width = "10px"
    line.style.transition = "all 0s";
    let info: HTMLElement = <HTMLElement>element.querySelector(".info")
    info.setAttribute("hidden", "true");
    line.style.transition = "all 0s";
    let grid: HTMLElement = <HTMLElement>element.querySelector(".grid")
    grid.classList.remove("grid-active");
}
function collapseOthers(element: HTMLElement){
    portfolio_set.forEach((p) => {
        if (p != element){
            collapse(p);
        }
    }); 
}

function indexHover(element: HTMLElement) {
    if (element) {
        element.addEventListener('mouseover', () => {
            let pattern: string = "repeat(13, 12px";

            // deal with first image, change the left-bar color
            if (cover){
                if (element == portfolio_02) {
                    cover.style.borderLeftColor = "#fff";
                } else {
                    cover.style.borderLeftColor = "#ccd3d9";
                }
            }

            //collapse others
            if (element != portfolio_13){
                collapse(portfolio_13)
            }
            //collapse others
            if (element != portfolio_04){
                collapse(portfolio_04)
            }

            for (let i = 1; i < portfolio_set.length; i++) {
                if (portfolio_set[i] == element) {
                    pattern += " 600px";
                } else {
                    pattern += " 50px";
                }
            }
            if (portfolio) {
                portfolio.style.gridTemplateColumns = pattern + ")";
                portfolio.style.transition = "all 1s";
            }
            expand(element)
        }, false);
    }
}

function indexHoverOver(element: HTMLElement) {
    if (element) {
        element.addEventListener('mouseleave',  () => {
            if (cover) {
                cover.style.borderLeftColor = "#fff";
            }
            if (portfolio) {
                portfolio.style.gridTemplateColumns = "repeat(13, 12px 600px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px)";
                portfolio.style.transition = "all 1s";
            }
            collapse(element)
        }, false);
    }
}

// click that Contact
contactMenu.addEventListener("click", () => {
    if (portfolio) {
        portfolio.style.gridTemplateColumns = "repeat(13, 12px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 600px)";
        portfolio.style.transition = "all 1s";
    }
    collapse(portfolio_03)
    collapse(portfolio_04)
    expand(portfolio_13)
});

//click that work
workMenu.addEventListener("click", () => {
    if (portfolio) {
        portfolio.style.gridTemplateColumns = "repeat(13, 12px 50px 50px 600px 50px 50px 50px 50px 50px 50px 50px 50px 50px )";
        portfolio.style.transition = "all 1s";
    }
    collapse(portfolio_03)
    collapse(portfolio_13)
    expand(portfolio_04)
    
});
aboutMenu.addEventListener("click", () => {
    if (portfolio) {
        portfolio.style.gridTemplateColumns = "repeat(13, 12px 50px 600px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px )";
        portfolio.style.transition = "all 1s";
    }
    collapse(portfolio_13)
    collapse(portfolio_04)
    expand(portfolio_03)
    
});



function indexRefresh() {
    indexHover(portfolio_02);
    indexHoverOver(portfolio_02);
    indexHover(portfolio_03);
    indexHoverOver(portfolio_03);
    indexHover(portfolio_04);
    indexHoverOver(portfolio_04);
    indexHover(portfolio_05);
    indexHoverOver(portfolio_05);
    indexHover(portfolio_06);
    indexHoverOver(portfolio_06);
    indexHover(portfolio_07);
    indexHoverOver(portfolio_07);
    indexHover(portfolio_08);
    indexHoverOver(portfolio_08);
    indexHover(portfolio_09);
    indexHoverOver(portfolio_09);
    indexHover(portfolio_10);
    indexHoverOver(portfolio_10);
    indexHover(portfolio_11);
    indexHoverOver(portfolio_11);
    indexHover(portfolio_12);
    indexHoverOver(portfolio_12);
    indexHover(portfolio_13);
    indexHoverOver(portfolio_13);
}

indexRefresh();