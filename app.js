function updateClock() {
    const now = new Date();
    const timeElement = document.getElementById("time");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

function init() {
    updateClock();
    setInterval(updateClock, 1000);
}

document.addEventListener("DOMContentLoaded", init);
