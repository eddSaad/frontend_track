const WEATHER_API_KEY = 'd180d09703c6b20b0e22b86f7f6880f5';

const cityInput = document.getElementById('city-input');
const getWeatherButton = document.getElementById('get-weather');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const descriptionElement = document.getElementById('description');
const errorElement = document.getElementById('error');

getWeatherButton.addEventListener('click', getWeather);

async function getWeather(){
    try{
        errorElement.textContent = "";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityInput.value)}&appid=${WEATHER_API_KEY}&units=imperial`);
        if(!response.ok){
            errorElement.textContent = "No city match";
            errorElement.style.color = "red";
            cityElement.textContent = "";
            temperatureElement.textContent = "";
            humidityElement.textContent = "";
            descriptionElement.textContent = "";
            throw new Error("No city match")
        }
        const data = await response.json();
        cityElement.textContent = data.name;
        temperatureElement.textContent = `${data.main.temp}°F`;
        humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
        descriptionElement.textContent = data.weather[0].description;
    }catch(error){
        console.error(error);
    }
   
}