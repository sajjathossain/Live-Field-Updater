const inputField = document.getElementById("inputField")! as HTMLInputElement;
const outputField = document.getElementById("outputField")! as HTMLOutputElement;
const bold = document.getElementById("bold")! as HTMLButtonElement;
const italic = document.getElementById("italic")! as HTMLButtonElement;
const underlined = document.getElementById("underlined")! as HTMLButtonElement;

interface styling{
    for: string
    clicked: boolean;
}

let stylings: Array<styling> = [
    {
        for: "bold",
        clicked: false
    },
    {
        for: "italic",
        clicked: false
    },
    {
        for: "underlined",
        clicked: false
    }
]


function changeToBold(output: string) {

    if (stylings[0].clicked === false) {

        bold.style.opacity = "75%"
        outputField.innerHTML = `<b>${output}</b>`;
        stylings[0].clicked = !stylings[0].clicked;
        stylings[1].clicked = false;
        italic.style.opacity = "100%"
        stylings[2].clicked = false;
        underlined.style.opacity = "100%"

    } else {
        
        bold.style.opacity = "100%"
        outputField.innerHTML = output;
        stylings[0].clicked = !stylings[0].clicked;
        
    }

}

function changeToItalic(output: string) {
    
    if (stylings[1].clicked === false) {

        italic.style.opacity = "75%"
        outputField.innerHTML = `<i>${output}</i>`;
        stylings[1].clicked = !stylings[1].clicked;
        stylings[0].clicked = false;
        bold.style.opacity = "100%"
        stylings[2].clicked = false;
        underlined.style.opacity = "100%"

    } else {
        
        italic.style.opacity = "100%"
        outputField.innerHTML = output;
        stylings[1].clicked = !stylings[1].clicked;

    }

}


function changeToUnderlined(output: string) {

    if (stylings[2].clicked === false) {

        underlined.style.opacity = "75%"
        outputField.innerHTML = `<u>${output}</u>`;
        stylings[2].clicked = !stylings[2].clicked;
        stylings[1].clicked = false;
        bold.style.opacity = "100%"
        stylings[0].clicked = false;
        italic.style.opacity = "100%"

    } else {

        underlined.style.opacity = "100%"
        outputField.innerHTML = output;
        stylings[2].clicked = !stylings[2].clicked;
    }

}

function updateOutput() {

    let output: string = "";
    output += inputField.value;
    outputField.innerHTML = output;

    bold.addEventListener("click", () => {
        
        changeToBold(output); 

    });

    italic.addEventListener("click", () => {

      changeToItalic(output); 

    });

    underlined.addEventListener("click", () => {

        changeToUnderlined(output); 

    });

}

 

document.addEventListener("DOMContentLoaded", () => {
    inputField.addEventListener("input", updateOutput);
    // updateOutput();
});