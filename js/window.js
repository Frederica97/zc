function setZoom() {
    var screenWidth = window.innerWidth;
    var zoomPer = 0.8;
    if (screenWidth <= 1366){
        zoomPer *= 0.9;
    }
    if (screenWidth >= 2000){
        zoomPer = 1;
    }
    document.body.style.zoom = zoomPer;
}

window.onload = setZoom;
window.onresize = setZoom; 