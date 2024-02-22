const button = document.getElementById('btn');
const cityName = document.getElementById('input-text');
const icon = document.querySelector('.icon');
const city = document.querySelector('.city');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temp');
const description = document.querySelector('.description');

const apiKey = 'b48fb991a4ca6233e04a2acbe5dbcd92';

button.addEventListener('click', () => {
    getWeather().then(weatherData => {
        console.log(weatherData);
        const iconCode = weatherData.weather[0].icon;
        const weatherVal = weatherData.weather[0].main;
        const descriptionVal = weatherData.weather[0].description;
        const temperatureVal = weatherData.main.temp;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${iconCode}.png">`;
        city.innerHTML = weatherData.name;
        weather.innerHTML = weatherVal;
        temperature.innerHTML = (temperatureVal - 273.15).toFixed(2) + '\u00B0 Celsius';
        description.innerHTML = descriptionVal;
    });
});

async function getWeather() {

    const cityVal = cityName.value.trim();
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${apiKey}`).then(response => response.json());
}