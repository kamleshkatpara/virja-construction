// Check if the site is hosted on GitHub Pages
if (window.location.hostname === "kamleshkatpara.github.io") {
  let base = document.createElement("base");
  base.href = "https://kamleshkatpara.github.io/virja-construction/";
  document.head.appendChild(base);
}

let currentYear = new Date().getFullYear();

document.getElementById("current-year").textContent = currentYear;

const basePath =
  window.location.hostname === "kamleshkatpara.github.io"
    ? "/virja-construction/"
    : "/";
const currentPath = window.location.pathname.replace(basePath, "");

console.log(currentPath);

const navLinks = document.querySelectorAll(".header__nav-link");

navLinks.forEach((link) => {
  if (basePath === "/virja-construction/") {
    const newHref = basePath + link.getAttribute("href");
    link.setAttribute("href", newHref);
  }

  if (link.getAttribute("href").includes(currentPath) && currentPath !== "") {
    link.classList.add("header__nav-link--active");
  }
});

const logoLink = document.querySelector(".header__logo-link img");
if (basePath === "/virja-construction/") {
  logoLink.setAttribute("src", basePath + "assets/logo.jpg");
}

const menuOverlay = document.querySelector(".header__menu-overlay");
const menuBtn = document.querySelector(".header__menu-btn");

menuOverlay.addEventListener("click", () => {
  menuBtn.checked = false;
});

/**
 * Carousel Code
 */
let slideIndex = 1;
let slideInterval;

function showSlides(n) {
  const slides = document.getElementsByClassName("carousel__slide");
  const dots = document.getElementsByClassName("carousel__dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" carousel__dot--active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " carousel__dot--active";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
  resetAutoSlide();
}

function currentSlide(n) {
  showSlides((slideIndex = n));
  resetAutoSlide();
}

function createIndicators() {
  const slides = document.getElementsByClassName("carousel__slide");
  const indicatorsContainer = document.getElementById("carousel-indicators");

  indicatorsContainer.innerHTML = "";

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("span");
    dot.className = "carousel__dot";
    dot.onclick = () => currentSlide(i + 1);
    indicatorsContainer.appendChild(dot);
  }
}

function resetAutoSlide() {
  clearInterval(slideInterval);
  startAutoSlide();
}

function startAutoSlide() {
  slideInterval = setInterval(() => plusSlides(1), 5000);
}

createIndicators();
showSlides(slideIndex);
startAutoSlide();
