document.addEventListener('DOMContentLoaded', function () {
    var option0 = document.getElementById("option0");
    var option1 = document.getElementById("option1");
    var option2 = document.getElementById("option2");
    var option3 = document.getElementById("option3");
    var optionResult = document.getElementById('option-result');
    var optionSet = [option1, option2, option3];
    var defaultImageName = "../zc/img/porsche_option00.png";
    var imageName = defaultImageName;
    function hoverOption(element) {
        optionSet.forEach(function (element) {
            element.addEventListener('mouseover', function () {
                if (element != option0) {
                    optionSet.forEach(function (o, index) {
                        if (element == o) {
                            var i = index + 1;
                            imageName = "../zc/img/porsche_option" + i + i+ ".png";
                        }
                    });
                }
                optionResult.src = imageName;
                element.getElementsByClassName("circle")[0].classList.add("circle-solid");
                option0.getElementsByClassName("circle")[0].classList.remove("circle-solid");
                element.style.transition = "all 500ms";
            }, false);
            element.addEventListener('mouseleave', function () {
                optionResult.src = defaultImageName;
                element.getElementsByClassName("circle")[0].classList.remove("circle-solid");
                option0.getElementsByClassName("circle")[0].classList.add("circle-solid");
                element.style.transition = "all 500ms";
            }, false);
        });
    }
    function refreshOption() {
        hoverOption(option0);
        hoverOption(option1);
        hoverOption(option3);
        hoverOption(option2);
    }
    refreshOption();
});
