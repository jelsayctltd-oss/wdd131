
// TEMPLE DATA
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/ea817531789318cff9d81198cdc39923708b7b79/full/800%2C/0/default"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/e44b3c89b3485fa2f2c8aa09791d4334dfe23511/full/%2C500/0/default"
    },
    {
        templeName: "Freiberg Germany",
        location: "Freiberg, Germany",
        dedicated: "1985, June, 29",
        area: 21529,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/36e4c4f367cfab006feb507790c6d9e94c5d146c/full/800%2C/0/default"
    }
];
// DISPLAY TEMPLE CARDS
function displayTemples(templeList) {
    const gallery = document.querySelector(".temple-gallery");

    gallery.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("figure");

        card.innerHTML = `
            <img 
                src="${temple.imageUrl}" 
                alt="${temple.templeName} Temple"
                loading="lazy"
            >
            <figcaption>
                <h2>${temple.templeName}</h2>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
        `;

        gallery.appendChild(card);
    });
}

// DISPLAY ALL TEMPLES ON PAGE LOAD
displayTemples(temples);

// GET THE CURRENT YEAR, DISPLAY THE YEAR IN THE FOOTER
const currentYear = new Date().getFullYear();

document.querySelector("#currentyear").textContent = currentYear;


// GET THE LAST MODIFIED DATE, DISPLAY THE LAST MODIFIED DATE
const lastModified = new Date(document.lastModified);

document.querySelector("#lastModified").textContent =
    lastModified.toLocaleString();

// TEMPLE FILTER FUNCTIONS

// DISPLAY ALL TEMPLES
function showHome() {
    displayTemples(temples);
}

// DISPLAY TEMPLES DEDICATED BEFORE 1900
function showOld() {
    const oldTemples = temples.filter((temple) => {
        return Number(temple.dedicated.split(",")[0]) < 1900;
    });

    displayTemples(oldTemples);
}

// DISPLAY TEMPLES DEDICATED AFTER 2000
function showNew() {
    const newTemples = temples.filter((temple) => {
        return Number(temple.dedicated.split(",")[0]) > 2000;
    });

    displayTemples(newTemples);
}

// DISPLAY TEMPLES LARGER THAN 90,000 SQ FT
function showLarge() {
    const largeTemples = temples.filter((temple) => {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);
}

// DISPLAY TEMPLES SMALLER THAN 10,000 SQ FT
function showSmall() {
    const smallTemples = temples.filter((temple) => {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
}

// CONNECT NAVIGATION LINKS TO FILTER FUNCTIONS

document.querySelector("#home").addEventListener("click", function (event) {
    event.preventDefault();
    showHome();
});

document.querySelector("#old").addEventListener("click", function (event) {
    event.preventDefault();
    showOld();
});

document.querySelector("#new").addEventListener("click", function (event) {
    event.preventDefault();
    showNew();
});

document.querySelector("#large").addEventListener("click", function (event) {
    event.preventDefault();
    showLarge();
});

document.querySelector("#small").addEventListener("click", function (event) {
    event.preventDefault();
    showSmall();
});

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
