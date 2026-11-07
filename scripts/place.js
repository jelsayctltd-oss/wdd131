
// STATIC WEATHER DATA
const temperature = 10;
const windSpeed = 12;

// WIND CHILL FUNCTION
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// DISPLAY WIND CHILL
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

document.querySelector("#windChill").textContent = windChill;

// DISPLAY CURRENT YEAR
document.querySelector("#currentYear").textContent = new Date().getFullYear();

// DISPLAY LAST MODIFIED DATE
document.querySelector("#lastModified").textContent =
    new Date(document.lastModified).toLocaleDateString();
