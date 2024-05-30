const phase_01 = document.getElementById("phase-01");
const phase_02 = document.getElementById("phase-02");
const phase = document.getElementById("Container-phase");

function hoverPhase(element) {
    if (element) {
        var pattern = "1.5fr 4fr";
        var modify = phase_01;
        if (element == phase_01) {
            pattern = "4fr 1.5fr";
            modify = phase_02;
        }

        element.addEventListener(
            "mouseover",
            () => {
                if (phase) {
                    phase.style.gridTemplateColumns = pattern;
                    phase.style.transition = "all 1.5s";
                    squeezePhase(modify);
                }
            },
            false
        );

        element.addEventListener(
            "mouseleave",
            () => {
                if (phase) {
                    phase.style.gridTemplateColumns = "1fr 1fr";
                    phase.style.transition = "all 1s";
                    equalizePhase(modify);
                }
            },
            false
        );
    }
}

function squeezePhase(modify) {
    modify.style.opacity = "0.3";
    modify.style.transition = "all 1.5s";
    let text = modify.getElementsByClassName("des-text");
    if (text) {
        for (let i = 0; i < text.length; i++) {
            const t = text[i];
            t.style.fontSize = "10px";
            t.style.marginTop = "0px";
            t.style.lineHeight = "1";
            t.style.transition = "all 1.5s";
            t.style.opacity = "0.3";
        }
    }
}

function equalizePhase(modify) {
    modify.style.opacity = "1";
    modify.style.transition = "all 1s";
    let text = modify.getElementsByClassName("des-text");
    if (text) {
        for (let i = 0; i < text.length; i++) {
            const t = text[i];
            t.style.fontSize = "18px";
            t.style.marginTop = "10px";
            t.style.lineHeight = "1.5";
            t.style.transition = "all 1s";
            t.style.opacity = "1";
        }
    }
}

function refresh() {
    hoverPhase(phase_01);
    hoverPhase(phase_02);
}
refresh();

document.addEventListener("DOMContentLoaded", () => {
    const phaseContainer = document.getElementById("Container-phase");

    function isTopInView() {
        const rect = phaseContainer.getBoundingClientRect();
        return rect.top >= 10;
    }
    function isTopOut() {
        const windowHeight =
            window.innerHeight || document.documentElement.clientHeight;
        const rect = phaseContainer.getBoundingClientRect();
        return rect.top <= -20 || rect.bottom >= windowHeight + 220;
    }
    function amplifyB() {
        if (phase) {
            phase.style.gridTemplateColumns = "1.5fr 4fr";
            phase.style.transition = "all 1.5s";
            squeezePhase(phase_01);
        }
    }
    window.addEventListener(
        "scroll",
        (event) => {
            const scrollDistace = window.scrollY || window.pageYOffset;
            if (scrollDistace > 0) {
                // scroll up
                if (isTopInView()) {
                    amplifyB();
                }
            }
            if (isTopOut()) {
                if (phase) {
                    phase.style.gridTemplateColumns = "1fr 1fr";
                    phase.style.transition = "all 1s";
                    equalizePhase(phase_01);
                    equalizePhase(phase_02);
                }
            }
        },
        {passive: true}
    );
});
