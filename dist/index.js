"use strict";
var inputField = document.getElementById("inputField");
var outputField = document.getElementById("outputField");
var bold = document.getElementById("bold");
var italic = document.getElementById("italic");
var underlined = document.getElementById("underlined");
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
function updateOutput() {
    var output = "";
    output += inputField.value;
    outputField.innerHTML = output;
    bold.addEventListener("click", function () {
        if (stylings[0].clicked === false) {
            outputField.innerHTML = "<b>" + output + "</b>";
            stylings[0].clicked = !stylings[0].clicked;
        }
        else {
            outputField.innerHTML = output;
            stylings[0].clicked = !stylings[0].clicked;
        }
    });
    italic.addEventListener("click", function () {
        if (stylings[1].clicked === false) {
            outputField.innerHTML = "<i>" + output + "</i>";
            stylings[1].clicked = !stylings[1].clicked;
        }
        else {
            outputField.innerHTML = output;
            stylings[1].clicked = !stylings[1].clicked;
        }
    });
    underlined.addEventListener("click", function () {
        if (stylings[2].clicked === false) {
            outputField.innerHTML = "<u>" + output + "</u>";
            stylings[2].clicked = !stylings[2].clicked;
        }
        else {
            outputField.innerHTML = output;
            stylings[2].clicked = !stylings[2].clicked;
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    updateOutput();
});
