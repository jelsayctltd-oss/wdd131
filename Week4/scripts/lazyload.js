
// Get the last modified date of the HTML document
const lastModified = document.lastModified;

// Find the HTML element where the date will appear
const dateElement = document.querySelector("#lastModified");

// Display the formatted date
dateElement.textContent = new Date(lastModified).toLocaleString();
