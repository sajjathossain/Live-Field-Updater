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

function updateOutput() {

    let output: string = "";
    output += inputField.value;
    outputField.innerHTML = output;

    bold.addEventListener("click", () => {
        
        if (stylings[0].clicked === false) {
            outputField.innerHTML = `<b>${output}</b>`;
            stylings[0].clicked = !stylings[0].clicked;
        } else {
            outputField.innerHTML = output;
            stylings[0].clicked = !stylings[0].clicked;
        }

    });

    italic.addEventListener("click", () => {

        if (stylings[1].clicked === false) {
            outputField.innerHTML = `<i>${output}</i>`;
            stylings[1].clicked = !stylings[1].clicked;
        } else {
            outputField.innerHTML = output;
            stylings[1].clicked = !stylings[1].clicked;
        }

    });

    underlined.addEventListener("click", () => {

        if (stylings[2].clicked === false) {
            outputField.innerHTML = `<u>${output}</u>`;
            stylings[2].clicked = !stylings[2].clicked;
        } else {
            outputField.innerHTML = output;
            stylings[2].clicked = !stylings[2].clicked;
        }

    });

}

 

document.addEventListener("DOMContentLoaded", () => {
    updateOutput();
});