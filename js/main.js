// Check if the site is hosted on GitHub Pages
if (window.location.hostname === "kamleshkatpara.github.io") {
  let base = document.createElement("base");
  base.href = "https://kamleshkatpara.github.io/virja-construction/";
  document.head.appendChild(base);
}

// Get the current year
let currentYear = new Date().getFullYear();

// Set the current year in the span with id 'current-year'
document.getElementById("current-year").textContent = currentYear;

const basePath =
  window.location.hostname === "kamleshkatpara.github.io"
    ? "/virja-construction/"
    : "/";
const currentPath = window.location.pathname.replace(basePath, "");

console.log(currentPath);

// Select all navigation links
const navLinks = document.querySelectorAll(".header__nav-link");

// Iterate over each link
navLinks.forEach((link) => {
  // Append the base path for GitHub Pages if needed
  if (basePath === "/virja-construction/") {
    const newHref = basePath + link.getAttribute("href");
    link.setAttribute("href", newHref);
  }

  // Check if the href attribute matches the current path
  console.log(link.getAttribute("href"));

  if (link.getAttribute("href").includes(currentPath) && currentPath !== "") {
    // Add the 'header__nav-link--active' class to the current link
    link.classList.add("header__nav-link--active");
  }
});

// For the logo link
const logoLink = document.querySelector(".header__logo-link img");
if (basePath === "/virja-construction/") {
  logoLink.setAttribute("src", basePath + "assets/logo.jpg");
}
