function updateClock() {
    const now = new Date();

    document.getElementById("clock").textContent =
        now.toLocaleTimeString("cs-CZ", {
            timeZone: "Europe/Prague",   // český čas (letní i zimní automaticky)
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });
}

updateClock();
setInterval(updateClock, 1000);
