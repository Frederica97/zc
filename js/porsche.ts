
document.addEventListener('DOMContentLoaded', function () {

    const option0: HTMLElement = <HTMLElement>document.getElementById("option0");
    const option1: HTMLElement = <HTMLElement>document.getElementById("option1");
    const option2: HTMLElement = <HTMLElement>document.getElementById("option2");
    const option3: HTMLElement = <HTMLElement>document.getElementById("option3");
    const optionResult: HTMLImageElement = document.getElementById('option-result') as HTMLImageElement;
    const optionSet = [option1, option2, option3]
    
    var defaultImageName = "../zc/img/porsche_option00.png";
    var imageName = defaultImageName;
    
    
    function hoverOption(element: HTMLElement) {
        optionSet.forEach((element)=>{
            element.addEventListener('mouseover', () => {
                if (element != option0){
                    optionSet.forEach((o, index)=>{
                        if (element == o){
                            const i = index + 1;
                            imageName = "../zc/img/porsche_option" + i+i + ".png"
                        }
                    })
                }
                optionResult.src = imageName;
                console.log(element)
                console.log(imageName)
                element.getElementsByClassName("circle")[0].classList.add("circle-solid")
                option0.getElementsByClassName("circle")[0].classList.remove("circle-solid")
                element.style.transition = "all 500ms"
            }, false);
            element.addEventListener('mouseleave', () => {
                optionResult.src = defaultImageName;
                element.getElementsByClassName("circle")[0].classList.remove("circle-solid")
                option0.getElementsByClassName("circle")[0].classList.add("circle-solid")
                element.style.transition = "all 500ms"

            }, false);
        });
    }
    
    function refreshOption(){
        console.log("trigger")
        hoverOption(option0);
        hoverOption(option1);
        hoverOption(option3);
        hoverOption(option2);

    }
    
    refreshOption()
    


});

