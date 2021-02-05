"use strict";
var inputField = document.getElementById("inputField");
var outputField = document.getElementById("outputField");
var bold = document.getElementById("bold");
var italic = document.getElementById("italic");
var underlined = document.getElementById("underlined");
var pastOutput;
var stylings = [
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
];
function changeToBold(output) {
    if (stylings[0].clicked === false) {
        bold.style.opacity = "75%";
        outputField.innerHTML = "<b>" + output + "</b>";
        stylings[0].clicked = !stylings[0].clicked;
        stylings[1].clicked = false;
        italic.style.opacity = "100%";
        stylings[2].clicked = false;
        underlined.style.opacity = "100%";
    }
    else {
        bold.style.opacity = "100%";
        outputField.innerHTML = pastOutput;
        stylings[0].clicked = !stylings[0].clicked;
    }
}
function changeToItalic(output) {
    outputField.innerHTML = "";
    if (stylings[1].clicked === false) {
        italic.style.opacity = "75%";
        outputField.innerHTML = "<i>" + output + "</i>";
        stylings[1].clicked = !stylings[1].clicked;
        stylings[0].clicked = false;
        bold.style.opacity = "100%";
        stylings[2].clicked = false;
        underlined.style.opacity = "100%";
    }
    else {
        italic.style.opacity = "100%";
        outputField.innerHTML = pastOutput;
        stylings[1].clicked = !stylings[1].clicked;
    }
}
function changeToUnderlined(output) {
    outputField.innerHTML = "";
    if (stylings[2].clicked === false) {
        underlined.style.opacity = "75%";
        outputField.innerHTML = "<u>" + output + "</u>";
        stylings[2].clicked = !stylings[2].clicked;
        stylings[1].clicked = false;
        bold.style.opacity = "100%";
        stylings[0].clicked = false;
        italic.style.opacity = "100%";
    }
    else {
        underlined.style.opacity = "100%";
        outputField.innerHTML = pastOutput;
        stylings[2].clicked = !stylings[2].clicked;
    }
}
function updateOutput() {
    var output = "";
    output += inputField.value;
    pastOutput = output;
    outputField.innerHTML = output;
    bold.addEventListener("click", function () {
        changeToBold(output);
    });
    italic.addEventListener("click", function () {
        changeToItalic(output);
    });
    underlined.addEventListener("click", function () {
        changeToUnderlined(output);
    });
}
var sn = "";
document.addEventListener("DOMContentLoaded", function () {
    inputField.addEventListener("input", updateOutput);
});
