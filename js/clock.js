function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("cs-CZ", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
}

updateClock();
setInterval(updateClock, 1000);
