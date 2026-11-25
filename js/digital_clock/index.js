function displayDigitalClock(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    let meridiem = hours > 12 ? "pm" : "am";
    hours = hours % 12 || 12; 
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const secondes = now.getSeconds().toString().padStart(2, 0);
    document.getElementById("clock").textContent = `${hours}:${minutes}:${secondes} ${meridiem}`;

}
displayDigitalClock()
setInterval(displayDigitalClock, 1000);