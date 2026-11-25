const timer = document.getElementById('timer');
let startTime = 0; 
let elapsedTime = 0;
let isRunninug = false; 
let intervalId = null;

function start(){
    if(!isRunninug){
        startTime = Date.now() - elapsedTime; 
        intervalId = setInterval(update, 10); 
        isRunninug = true;  
        console.log("Starting timer");
    }
}

function stop(){
    if(isRunninug){
        clearInterval(intervalId);
        isRunninug = false;
        console.log("Stopping timer");
    }
}

function resetTimer(){
        console.log("Resetting timer"); 
        clearInterval(intervalId);
        startTime = 0; 
        elapsedTime = 0;
        isRunninug = false;
        console.log("Resetting timer");
        timer.textContent = "00:00:00:00";

}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let millis = Math.floor(elapsedTime % 1000 / 10);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    millis = String(millis).padStart(2, 0);

    timer.textContent = `${hours}:${minutes}:${seconds}:${millis}`;
}
