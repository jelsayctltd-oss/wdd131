
// GET THE CURRENT YEAR, DISPLAY THE YEAR IN THE FOOTER
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// GET THE LAST MODIFIED DATE, DISPLAY THE LAST MODIFIED DATE
const lastModified = new Date(document.lastModified);

document.querySelector("#lastModified").textContent =
    lastModified.toLocaleString();


// SELECT THE HAMBURGER BUTTON AND NAVIGATION
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

// LISTEN FOR A CLICK ON THE BUTTON
menuButton.addEventListener("click", function () {

    // SHOW OR HIDE THE NAVIGATION MENU
    navigation.classList.toggle("show");

    // CHANGE THE BUTTON SYMBOL
    if (navigation.classList.contains("show")) {
        menuButton.textContent = "✕";
        menuButton.setAttribute("aria-label", "Close navigation menu");
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");
    }

});
