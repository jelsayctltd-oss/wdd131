
// Retrieve the previous review count
let reviewCount = localStorage.getItem("reviewCount");

// Check whether this is the first review
if (reviewCount === null) {
    reviewCount = 0;
}

// Convert the count into a number
reviewCount = Number(reviewCount);

// Increase the review count by one
reviewCount++;

// Save the updated count
localStorage.setItem("reviewCount", reviewCount);

// Display the review count
document.querySelector("#reviewCount").textContent = reviewCount;
