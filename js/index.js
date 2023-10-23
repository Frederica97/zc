var portfolio_01 = document.getElementById("01");
var portfolio_02 = document.getElementById("02");
var portfolio_03 = document.getElementById("03");
var portfolio_04 = document.getElementById("04");
var portfolio_05 = document.getElementById("05");
var portfolio_06 = document.getElementById("06");
var portfolio_07 = document.getElementById("07");
var portfolio_08 = document.getElementById("08");
var portfolio_09 = document.getElementById("09");
var portfolio_10 = document.getElementById("10");
var portfolio_11 = document.getElementById("11");
var portfolio_12 = document.getElementById("12");
var portfolio_13 = document.getElementById("13");
var cover = document.getElementById("cover");
var contact = document.getElementById("contact");
var contactContent = contact.querySelectorAll("p");
var portfolio = document.getElementById("portfolio");
var portfolio_set = [
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
function indexHover(element) {
    if (element) {
        element.addEventListener('mouseover', function () {
            var pattern = "repeat(13, 12px";
            if (element == portfolio_02) {
                if (cover) {
                    cover.style.borderLeftColor = "#fff";
                }
            }
            else {
                if (cover) {
                    cover.style.borderLeftColor = "#ccd3d9";
                }
            }
            for (var i = 1; i < portfolio_set.length; i++) {
                if (portfolio_set[i] == element) {
                    pattern += " 600px";
                }
                else {
                    pattern += " 50px";
                }
            }
            if (portfolio) {
                portfolio.style.gridTemplateColumns = pattern + ")";
                portfolio.style.transition = "all 1s";
            }
            var line = element.querySelector(".mark");
            line.style.height = "170px";
            line.style.width = "5px";
            line.style.transition = "all 1s";
            var info = element.querySelector(".info");
            info.removeAttribute("hidden");
            var grid = element.querySelector(".grid");
            grid.classList.add("grid-active");
            // set the contact format 
            if (element == portfolio_13) {
                contact.removeAttribute("hidden");
                contactContent.forEach(function (c) {
                    c.classList.remove('invisible');
                });
            }
            else {
                contact.setAttribute("hidden", "true");
                contactContent.forEach(function (c) {
                    c.classList.add('invisible');
                });
            }
        }, false);
    }
}
function indexHoverOver(element) {
    if (element) {
        element.addEventListener('mouseleave', function () {
            if (cover) {
                cover.style.borderLeftColor = "#fff";
            }
            if (portfolio) {
                portfolio.style.gridTemplateColumns = "repeat(13, 12px 600px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px)";
                portfolio.style.transition = "all 1s";
            }
            var line = element.querySelector(".mark");
            line.style.height = "10px";
            line.style.width = "10px";
            line.style.transition = "all 0s";
            var info = element.querySelector(".info");
            info.setAttribute("hidden", "true");
            line.style.transition = "all 0s";
            contact.setAttribute("hidden", "true");
            contactContent.forEach(function (c) {
                c.classList.add('invisible');
            });
            var grid = element.querySelector(".grid");
            grid.classList.remove("grid-active");
        }, false);
    }
}
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
