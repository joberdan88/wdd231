import { formatTemperature } from './utils.js'

const apiKey = "bd3fbdea6c49c5123c7f8c4d1b32f2a3"
const city = "Rio de Janeiro"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

// Weather
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    document.querySelector("#temp").textContent = formatTemperature(data.main.temp);
    document.querySelector("#desc").textContent = data.weather[0].description;
}

// Forecast
async function getForecast() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    const forecastDiv = document.querySelector("#forecast");
    forecastDiv.innerHTML = "";

    const daily = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
    daily.forEach(day => {
        forecastDiv.innerHTML += `<p>${day.dt_txt.split(" ")[0]}: ${formatTemperature(day.main.temp)}, ${day.weather[0].description}</p>`;
    });
}

// Spotlights
async function loadSpotlights() {
    const response = await fetch("data/members.json");
    const members = await response.json();

    const goldSilver = members.filter(m => m.membership === "Gold" || m.membership === "Silver");
    const random = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

    const container = document.querySelector("#spotlight-container");
    container.innerHTML = "";
    random.forEach(m => {
        container.innerHTML += `
      <div class="card">
        <img src="images/${m.image}" alt="${m.name} logo">
        <h3>${m.name}</h3>
        <p>${m.phone}</p>
        <p>${m.address}</p>
        <a href="${m.website}" target="_blank">${m.website}</a>
        <p>Membership: ${m.membership}</p>
      </div>
    `;
    });
}

getWeather();
getForecast();
loadSpotlights();
