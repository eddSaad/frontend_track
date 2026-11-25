const cvtButton = document.getElementById("cvtButton");
const tempValue = document.getElementById("temperatureInput")
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const result = document.getElementById("result");



function celesiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function tempConverter(){
    let val = Number(tempValue.value);
    if(isNaN(val)){
        console.log("Please enter a valid temperature value");
    }else{
        if (celsius.checked) {
            let fahVal =  celesiusToFahrenheit(val);
            console.log(fahVal);
            result.textContent = `${fahVal}°F`;
        }else if (fahrenheit.checked) {
            let celVal =  fahrenheitToCelsius(val);
            console.log(celVal);
            result.textContent = `${celVal}°C`;
        }
       
    }    
}
