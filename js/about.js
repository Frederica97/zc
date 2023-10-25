var aboutPage = document.getElementById("page-about");
var filter = document.getElementById("filter");
var iconSet = [];
function setPageSizeToWindowSize() {
    filter.innerHTML = "";
    filter.style.position = "absolute";
    filter.style.top = "50%";
    filter.style.left = "50%";
    filter.style.transform = "translate(-50%, -50%)";
    // Get the window dimensions
    var windowWidth = window.innerWidth * 0.8;
    var windowHeight = window.innerHeight * 0.9;
    var ratio = windowWidth / windowHeight;
    var gridOptionSet = ["12x5", "10x6", "8x7", "7x8"];
    var gridOption = gridOptionSet[0];
    var gridNumWidth = 12;
    var gridNumHeight = 5;
    if (ratio <= 1.45 && ratio > 1) {
        gridNumWidth = 10;
        gridNumHeight = 6;
        gridOption = gridOptionSet[1];
    }
    if (ratio <= 1 && ratio > 0.8) {
        gridNumWidth = 8;
        gridNumHeight = 7;
        gridOption = gridOptionSet[2];
    }
    if (ratio <= 0.8 && ratio > 0.4) {
        gridNumWidth = 7;
        gridNumHeight = 8;
        gridOption = gridOptionSet[3];
    }
    // Set the content element size to match the window
    aboutPage.style.width = windowWidth + "px";
    aboutPage.style.height = windowHeight + "px";
    aboutPage.style.margin = "auto";
    // Calculate grid item size based on the window dimensions
    var gridItemWidth = windowWidth / gridNumWidth;
    var gridItemHeight = windowHeight / gridNumHeight;
    var gridDim = Math.min(gridItemWidth, gridItemHeight);
    // Create and style the grid
    filter.style.display = "grid";
    console.log("repeat(12, " + gridDim + ")");
    filter.style.gridTemplateColumns = "repeat(" + gridNumWidth + ", " + gridDim + "px)";
    filter.style.gridTemplateRows = "repeat(" + gridNumHeight + ", " + gridDim + "px)";
    // filter.style.gap = "5px"; 
    for (var i = 0; i < gridNumWidth * gridNumHeight; i++) {
        var gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.style.width = gridDim + "px";
        gridItem.style.height = gridDim + "px";
        console.log(gridDim + "px");
        gridItem.style.border = "0.5px dashed rgba(120,120,120,0.25)";
        filter.appendChild(gridItem);
    }
    var gridItems = document.getElementsByClassName("grid-item");
    if (gridItems) {
        var imageH3V2 = [gridItems[38]];
        var imageH2V2 = [gridItems[26]];
        var imageH2 = [gridItems[13], gridItems[18], gridItems[40]];
        var imageV2 = [gridItems[10]];
        spanH3V2(imageH3V2);
        spanH2V2(imageH2V2);
        spanH2(imageH2);
        spanV2(imageV2);
        var divideSquare = [gridItems[3], gridItems[7], gridItems[16], gridItems[28], gridItems[34], gridItems[37], gridItems[45]];
        QuadrantImageGrid(divideSquare, gridDim);
        var singleImage = [gridItems[10], gridItems[13], gridItems[40]];
        singleImageGrid(singleImage);
        // imageH3.length * 2 + 
        var deleteNum = imageH3V2.length * 5 + imageH2.length * 1 + imageV2.length * 1 + imageH2V2.length * 3 + 2;
        deleteLast(deleteNum, gridItems.length);
    }
}
function singleImageGrid(element) {
    element.forEach(function (e, index) {
        // e.style.backgroundColor = "rgba(64,67,78,0.4)";
        e.style.backgroundImage = "url('C:/__Zinan/2023_Fall_Zinan/T_web/zc/img/about_note_" + index + ".png')";
        e.style.filter = 'grayscale(100%)';
        e.style.backgroundSize = "cover";
        e.style.opacity = "0.6";
        e.addEventListener('mouseover', function () {
            // Remove the grayscale filter on hover
            e.style.filter = 'none';
            e.style.opacity = "1";
            e.style.transition = "all 0.5s";
        });
        // Add a mouseout event listener to reapply the grayscale filter when the mouse leaves
        e.addEventListener('mouseout', function () {
            e.style.filter = 'grayscale(100%)';
            e.style.opacity = "0.6";
            e.style.transition = "all 0.5s";
        });
    });
}
function spanH2(element) {
    element.forEach(function (e) {
        e.style.gridColumnEnd = "span 2";
        // e.style.backgroundColor = "rgba(64,67,78,0.25)";
        e.style.backgroundColor = "rgba(255,255,255,0.15)";
        e.style.width = parseInt(e.style.width) * 2 + "px";
    });
}
function spanH3V2(element) {
    element.forEach(function (e) {
        e.style.gridColumnEnd = "span 3";
        e.style.gridRowEnd = "span 2";
        e.style.backgroundColor = "rgba(255,255,255,0.25)";
        e.style.width = parseInt(e.style.width) * 3 + "px";
        e.style.height = parseInt(e.style.height) * 2 + "px";
        var displayDiv = document.createElement("div");
        displayDiv.id = "display-div";
        e.appendChild(displayDiv);
    });
}
function spanV2(element) {
    element.forEach(function (e) {
        e.style.gridRowEnd = "span 2";
        // e.style.backgroundColor = "rgba(64,67,78,0.25)";
        e.style.backgroundColor = "rgba(255,255,255,0.15)";
        e.style.height = parseInt(e.style.height) * 2 + "px";
    });
}
function spanH2V2(element) {
    element.forEach(function (e) {
        e.style.gridColumnEnd = "span 2";
        e.style.gridRowEnd = "span 2";
        e.style.backgroundColor = "rgba(255,255,255,0.35)";
        // e.style.backgroundColor = "rgba(64,67,78,0.25)";
        e.style.width = parseInt(e.style.width) * 2 + "px";
        e.style.height = parseInt(e.style.height) * 2 + "px";
        var nameDiv = document.createElement("div");
        var name1 = document.createElement("h3");
        name1.innerText = "Hi, I'm";
        name1.style.fontFamily = "Roboto Slab";
        name1.style.textAlign = "right";
        name1.style.fontSize = "40px";
        name1.style.margin = "0";
        var name2 = document.createElement("h3");
        name2.innerText = "ZINAN";
        name2.style.fontFamily = "Roboto Slab";
        name2.style.textAlign = "right";
        name2.style.fontSize = "50px";
        name2.style.margin = "0";
        nameDiv.appendChild(name1);
        nameDiv.appendChild(name2);
        nameDiv.style.width = "100%";
        nameDiv.style.marginRight = "20px";
        e.style.display = "flex";
        e.style.alignItems = "center";
        e.appendChild(nameDiv);
        e.addEventListener('mouseover', function () {
            // Remove the grayscale filter on hover
            e.style.color = "#ff7700";
            e.style.transition = "all 0.5s";
            var displayText = document.getElementById("display-div");
            console.log(displayText);
            if (displayText) {
                displayText.style.backgroundColor = "rgba(255,255,255,0.85)";
                var hoverNameText = document.createElement("p");
                hoverNameText.innerText = "Zinan Chi's designs spann a diverse range of scales – from urban planning to product design. Her interests encompass both physical and digital domains, especially in the fusion of -- Technology -- with Human Experiences and the Built Environment.Her perspective has been deeply influenced by her upbringing in Nanjing, China. Her exploration of transportation dynamics, appreciation of nature's intricate subtleties, and immersion in the local culture have all significantly shaped her design principles. Zinan places value on the intricate interconnection between people and design. Later, living in St. Louis, Amsterdam, Tokyo, Florence, and Boston and researching in Ecuador and Saudi Arabia, she incorporates the personal narratives of locals into her creative endeavors, infusing her work with depth and meaning. Driven by these compelling narratives on her way, Zinan is wholeheartedly dedicated to employing her knowledge to envision and craft innovative ways of living.";
                displayText.appendChild(hoverNameText);
            }
        });
        // Add a mouseout event listener to reapply the grayscale filter when the mouse leaves
        e.addEventListener('mouseout', function () {
            e.style.color = "black";
            e.style.transition = "all 0.5s";
            var displayText = document.getElementById("display-div");
            if (displayText) {
                displayText.innerHTML = "";
                displayText.style.backgroundColor = "rgba(255,255,255,0.35)";
            }
        });
    });
}
function deleteLast(n, len) {
    for (var i = 0; i < n; i++) {
        filter.removeChild(filter.children[len - n]);
    }
}
function QuadrantImageGrid(element, dim) {
    iconSet = [];
    element.forEach(function (e) {
        e.style.display = "grid";
        e.style.gridTemplateColumns = "repeat(2, 50%)";
        e.style.gridTemplateRows = "repeat(2, 50%)";
        for (var i = 0; i < 4; i++) {
            var subgridItem = document.createElement("div");
            subgridItem.classList.add("subgrid-item");
            subgridItem.style.width = dim / 2 + "px";
            subgridItem.style.height = dim / 2 + "px";
            var seed = Math.random();
            if (seed > 0.6) {
                iconSet.push(subgridItem);
            }
            else if (seed < 0.2) {
                subgridItem.style.backgroundColor = "rgba(64,67,78,0.15)";
            }
            // e.style.gap = "5px"; 
            e.appendChild(subgridItem);
        }
    });
    // set image
    iconSet.forEach(function (i, index) {
        i.style.backgroundImage = "url('C:/__Zinan/2023_Fall_Zinan/T_web/zc/img/about_icon_" + index + ".png')";
        i.style.filter = 'grayscale(100%)';
        i.style.backgroundSize = "cover";
        i.style.opacity = "0.5";
        i.addEventListener('mouseover', function () {
            i.style.filter = 'none';
            i.style.opacity = "1";
            i.style.transition = "all 0.5s";
        });
        i.addEventListener('mouseout', function () {
            i.style.filter = 'grayscale(100%)';
            i.style.opacity = "0.5";
            i.style.transition = "all 0.5s";
        });
    });
}
window.addEventListener("load", setPageSizeToWindowSize);
window.addEventListener("resize", setPageSizeToWindowSize);
