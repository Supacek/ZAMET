// =====================================================
// POČASÍ
// =====================================================

const {
    location,
    lat,
    lon,
    apiKey,
    refresh
} = CONFIG.weather;

// Nastaví nadpis z konfigurace
document.getElementById("weather-title").textContent =
    `Počasí ${location}`;

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

        console.log(error);

        document.getElementById("weather").innerHTML =
            "Počasí nedostupné";
    });
}

// První načtení
loadWeather();

// Aktualizace podle konfigurace
setInterval(loadWeather, refresh);
