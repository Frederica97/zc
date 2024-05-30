const galleries = document.getElementsByClassName("Container-galleries");

function FormatGallery(gallery) {
    const onDisplay = gallery.querySelector(".gallery-display");
    const galleryElements = gallery.children;
    let pattern = "";
    for (let i = 0; i < galleryElements.length; i++) {
        if (galleryElements[i] == onDisplay) {
            pattern += " 30fr";
        } else {
            pattern += " 1fr";
        }
    }
    gallery.style.position = "relative";
    gallery.style.marginLeft = "auto";
    gallery.style.marginRight = "auto";
    gallery.style.display = "grid";
    gallery.style.width = "100%";
    gallery.style.gridTemplateColumns = pattern;
    gallery.style.gap = "20px";
    gallery.style.transition = "all 1s";
}

function setHeight() {
    for (let i = 0; i < galleries.length; i++) {
        const onDisplay = galleries[i].querySelector(".gallery-display");
        const displayWidth = onDisplay.offsetWidth;
        console.log(onDisplay);
        const style = window.getComputedStyle(onDisplay);
        const imageUrl = style.backgroundImage
            .slice(4, -1)
            .replace(/["']/g, "");
        console.log(imageUrl);
        const img = new Image();
        img.src = imageUrl;
        img.onload = function () {
            const width = img.naturalWidth;
            const height = img.naturalHeight;
            const displayHeight = String(
                displayWidth * (height / width) + "px"
            );
            galleries[i].style.height = displayHeight;
            galleries[i].style.transition = "height 0s";
        };
    }
}

function HoverGallery() {
    for (let i = 0; i < galleries.length; i++) {
        const galleryElements = galleries[i].children;
        for (let j = 0; j < galleryElements.length; j++) {
            galleryElements[j].addEventListener(
                "mouseover",
                (e) => {
                    let currentGallery = e.target.parentElement;
                    let currentDisplay =
                        currentGallery.querySelector(".gallery-display");
                    if (currentDisplay) {
                        currentDisplay.classList.remove("gallery-display");
                    }
                    e.target.classList.add("gallery-display");
                    FormatGallery(currentGallery);

                    let currentIndex = Array.from(
                        currentGallery.children
                    ).indexOf(e.target);
                    let texts = currentGallery.parentElement.querySelector(
                        ".Container-galleries-text"
                    );
                    if (texts) {
                        HoverWithText(currentGallery, currentIndex);
                    }
                },
                false
            );
        }
    }
}
function HoverWithText(gallery, index) {
    let texts = gallery.parentElement.lastElementChild;
    let currentText = texts.children;
    for (let i = 0; i < currentText.length; i++) {
        if (i == index) {
            currentText[i].removeAttribute("hidden");
        } else {
            currentText[i].setAttribute("hidden", "");
        }
    }
}

// init
for (let i = 0; i < galleries.length; i++) {
    let gallery = galleries[i];
    FormatGallery(gallery);
    setHeight();
}

// eventListener
HoverGallery();

// window size change
window.addEventListener("resize", setHeight);

// setTimeout(function () {
//     setHeight();
// }, 2300);

// scroll
let lastScrollTop = 0;
window.addEventListener(
    "scroll",
    (event) => {
        let scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;

        for (let i = 0; i < galleries.length; i++) {
            const galleryContainer = galleries[i];
            let rect = galleryContainer.getBoundingClientRect();
            if (rect.top > windowHeight || rect.bottom < 0) {
                continue;
            }
            // scroll up or scroll down
            if (scrollTop > lastScrollTop) {
                if (rect.top + rect.height / 2 < windowHeight / 2) {
                    let onDisplay =
                        galleryContainer.querySelector(".gallery-display");
                    if (onDisplay) {
                        onDisplay.classList.remove("gallery-display");
                    }
                    galleryContainer.lastElementChild.classList.add(
                        "gallery-display"
                    );
                    FormatGallery(galleryContainer);

                    let currentIndex = Array.from(
                        galleryContainer.children
                    ).indexOf(onDisplay);
                    let texts = galleryContainer.parentElement.querySelector(
                        ".Container-galleries-text"
                    );
                    if (texts) {
                        HoverWithText(galleryContainer, currentIndex);
                    }
                    galleryContainer.style.transition = "all 1.5s";
                }
            } else {
                if (rect.top + rect.height / 2 > windowHeight / 2) {
                    let onDisplay =
                        galleryContainer.querySelector(".gallery-display");
                    if (onDisplay) {
                        onDisplay.classList.remove("gallery-display");
                    }
                    galleryContainer.firstElementChild.classList.add(
                        "gallery-display"
                    );
                    FormatGallery(galleryContainer);

                    let currentIndex = Array.from(
                        galleryContainer.children
                    ).indexOf(onDisplay);
                    let texts = galleryContainer.parentElement.querySelector(
                        ".Container-galleries-text"
                    );
                    if (texts) {
                        HoverWithText(galleryContainer, currentIndex);
                    }
                    galleryContainer.style.transition = "all 1.5s";
                }
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

        }
    },
    {passive: true}
);
