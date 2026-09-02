// =====================================================
// POČASÍ
// =====================================================

// Načtení nastavení z config.js
const weatherConfig = CONFIG.weather;

// Nastaví nadpis
document.getElementById("weather-title").textContent =
    `Počasí ${weatherConfig.location}`;

function loadWeather() {

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${weatherConfig.lat}&lon=${weatherConfig.lon}&units=metric&lang=cz&appid=${weatherConfig.apiKey}`
    )
    .then(response => response.json())
    .then(data => {

        const temp = Math.round(data.main.temp);
        const desc = data.weather[0].description;

        document.getElementById("weather").innerHTML =
            `${temp}°C<br>${desc}`;

    })
    .catch(error => {

        console.error("Počasí:", error);

        document.getElementById("weather").innerHTML =
            "Počasí nedostupné";
    });

}

// První načtení
loadWeather();

// Automatická aktualizace
setInterval(loadWeather, weatherConfig.refresh);
