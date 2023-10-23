
document.addEventListener('DOMContentLoaded', function () {

    const option0: HTMLElement = <HTMLElement>document.getElementById("option0");

    const option1: HTMLElement = <HTMLElement>document.getElementById("option1");
    const option2: HTMLElement = <HTMLElement>document.getElementById("option2");
    const option3: HTMLElement = <HTMLElement>document.getElementById("option3");
    // const optionResult: HTMLImageElement = document.getElementById('option-result"') as HTMLImageElement;
    const optionResult: HTMLImageElement = document.getElementById('image') as HTMLImageElement;
    
    console.log(optionResult)
    var imageName = "";
    
    
    function hoverOption(element: HTMLElement) {
        console.log(element)
    
        if (element) {
            if (element == option1){
                imageName = "porsche_option1.png";
            }else if (element == option2){
                imageName = "porsche_option2.png";
            }else if (element == option3){
                imageName = "porsche_option3.png";
            }
            if(imageName){
                element.addEventListener('mouseover', () => {
                    optionResult.src = "porsche_option3.png";
                    element.getElementsByClassName("circle")[0].classList.add("circle-solid")
                }, false);
            }
    
        }
    }
    
    function refreshOption(){
        hoverOption(option1);
        hoverOption(option2);
        hoverOption(option3);
    }
    
    refreshOption()
    


});

