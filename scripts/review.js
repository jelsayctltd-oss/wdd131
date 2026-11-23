
// Check whether the page was reached after a form submission
const params = new URLSearchParams(window.location.search);

const isSubmission = params.has("productName");

// Get the previous review count from localStorage
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// Increase the count only after a valid form submission
if (isSubmission) {
    reviewCount++;

    // Save the updated count
    localStorage.setItem("reviewCount", reviewCount);
}

// Display the total review count
document.querySelector("#reviewCount").textContent = reviewCount;
