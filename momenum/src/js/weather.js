const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');

function setCityLocalStorage() {
    localStorage.setItem('city', city.value);
};

function getCityLocalStorage() {
    if (localStorage.getItem('city') === '') {
        city.value = 'Minsk';
    } else {
        city.value = localStorage.getItem('city');
    }
};

async function getWeather() {
    getCityLocalStorage();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=3ca653d54c0cdcc67c58cb7b414ce8ef&units=metric`;
    const res = await fetch(url);
    const data = await res.json();

    if (data.code === '404') {
        weatherError.textContent = data.message;
        weatherIcon.className = '';
        temperature.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = '';
    } else {
        weatherError.textContent = '';
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind speed: ${Math.round(data.wind.speed)}m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    }
};

function setCity() {
    if (city.value.trim() !== '') {
        setCityLocalStorage();
        getWeather();
        city.blur();
    } else {
        getWeather();
        city.blur();
    }
};

function getCity() {
    city.addEventListener('change', setCity);
};

function setCityStorage() {
    window.addEventListener('beforeunload', setCityLocalStorage);
};

function getCityStorage() {
    window.addEventListener('load', getCityLocalStorage);
};

export {
    getWeather,
    getCityStorage,
    setCityStorage,
    getCity
};
