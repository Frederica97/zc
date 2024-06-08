function setZoom() {
    var screenWidth = window.innerWidth;
    var zoomPer = 1;
    if (screenWidth <= 1366){
        zoomPer *= 0.9;
    }
    if (screenWidth >= 2000){
        zoomPer = 1.1;
    }
    if (screenWidth >= 2300){
        zoomPer = 1.25;
    }
    document.body.style.zoom = zoomPer;
}

window.onload = setZoom;
window.onresize = setZoom; 