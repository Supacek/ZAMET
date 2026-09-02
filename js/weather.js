// =====================================================
// POČASÍ
// =====================================================

// Načtení nastavení z config.js
const {
    location: weatherLocation,
    lat,
    lon,
    apiKey,
    refresh
} = CONFIG.weather;

// Nastaví nadpis z konfigurace
document.getElementById("weather-title").textContent =
    `Počasí ${weatherLocation}`;

// Funkce pro načtení počasí
function loadWeather() {

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=cz&appid=${apiKey}`
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

// Automatická aktualizace podle config.js
setInterval(loadWeather, refresh);
