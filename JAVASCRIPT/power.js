//RANDOM NO GENERATOR
Math.PI;

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min=1;
const max=6;
let randomNum;

myButton.onclick = function() {
    randomNum = Math.random();
    myLabel.textConstant = randomNum;
}