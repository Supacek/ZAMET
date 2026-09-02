// Počasí

/* ===================================================== */

const apiKey = "097e577eac9403ee6dc032311afb6fe4";

function loadWeather() {

    fetch(

        `https://api.openweathermap.org/data/2.5/weather?lat=49.317&lon=18.147&units=metric&lang=cz&appid=${apiKey}`

    )

    .then(response => response.json())

    .then(data => {

        console.log(data);

        const temp =

            Math.round(data.main.temp);

        const desc =

            data.weather[0].description;

        document.getElementById("weather").innerHTML =

            temp + "°C" +

            "<br>" +

            desc;
    })

    .catch(error => {

        console.log(error);

        document.getElementById("weather").innerHTML =

            "Počasí nedostupné";
    });
}

/* PRVNÍ NAČTENÍ */

loadWeather();

/* AKTUALIZACE */

setInterval(loadWeather, 1800000);