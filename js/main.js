// Get the current year
let currentYear = new Date().getFullYear();

// Set the current year in the span with id 'current-year'
document.getElementById("current-year").textContent = currentYear;

const currentPath = window.location.pathname;

console.log(currentPath);

// Select all navigation links
const navLinks = document.querySelectorAll(".header__nav-link");

// Iterate over each link
navLinks.forEach((link) => {
  // Check if the href attribute matches the current path
  console.log(link.getAttribute("href"));

  if (link.getAttribute("href") === currentPath) {
    // Add the 'header__nav-link--active' class to the current link
    link.classList.add("header__nav-link--active");
  }
});
