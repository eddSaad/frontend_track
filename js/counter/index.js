let counter = 0;

let conterLabel = document.getElementById("counter") ;
let decreaseButton = document.getElementById("decrease");
let resetButton = document.getElementById("reset");
let increaseButton = document.getElementById("increase");

decreaseButton.onclick = function(){
    counter--;
    conterLabel.textContent = counter;

}

resetButton.onclick = function(){
    counter = 0;
    conterLabel.textContent = counter;

}
increaseButton.onclick = function(){
    counter++;
    conterLabel.textContent = counter;

}