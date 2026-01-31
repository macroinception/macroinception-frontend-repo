document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".caseSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 24,

    // Add autoplay
    autoplay: {
      delay: 1800, // 3.5 seconds between slides
      disableOnInteraction: false, // Keep autoplay after user interaction
      pauseOnMouseEnter: true, // Pause when hovering
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});
// Mobile menu toggle
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".nav-overlay");
const navLinks = document.querySelectorAll("nav a");

function toggleMenu() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = burger.classList.contains("active")
    ? "hidden"
    : "";
}

burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// Close menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
      toggleMenu();
    }
  });
});
