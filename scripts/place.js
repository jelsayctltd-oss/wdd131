
const temperature = 10;
const windSpeed = 12;

// Wind chill calculation in Celsius and km/h
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;
}

// Display weather information
document.querySelector("#temperature").textContent = temperature;
document.querySelector("#windSpeed").textContent = windSpeed;

// Calculate wind chill only when conditions are met
const windChillElement = document.querySelector("#windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent =
        `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}

// Footer information
document.querySelector("#currentYear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    document.lastModified;
