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
document.addEventListener("DOMContentLoaded", () => {
  // ============================================
  // SWIPER INITIALIZATION
  // ============================================
  if (document.querySelector(".caseSwiper")) {
    new Swiper(".caseSwiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 1800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
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
  }

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
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

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // ============================================
  // ANIMATED BACKGROUND - PARTICLE GENERATION
  // ============================================
  function createAnimatedBackground() {
    // Check if animated background already exists
    if (document.querySelector(".animated-bg")) {
      return;
    }

    // Create animated background container
    const animatedBg = document.createElement("div");
    animatedBg.className = "animated-bg";

    // Create gradient overlay
    const gradientOverlay = document.createElement("div");
    gradientOverlay.className = "gradient-overlay";
    animatedBg.appendChild(gradientOverlay);

    // Create gradient orbs
    const orb1 = document.createElement("div");
    orb1.className = "gradient-orb orb-1";
    animatedBg.appendChild(orb1);

    const orb2 = document.createElement("div");
    orb2.className = "gradient-orb orb-2";
    animatedBg.appendChild(orb2);

    const orb3 = document.createElement("div");
    orb3.className = "gradient-orb orb-3";
    animatedBg.appendChild(orb3);

    // Create particle grid
    const particleGrid = document.createElement("div");
    particleGrid.className = "particle-grid";
    particleGrid.id = "particleGrid";
    animatedBg.appendChild(particleGrid);

    // Insert at the beginning of body
    document.body.insertBefore(animatedBg, document.body.firstChild);

    // Generate particles
    generateParticles();
  }

  function generateParticles() {
    const particleGrid = document.getElementById("particleGrid");
    if (!particleGrid) return;

    // Clear existing particles
    particleGrid.innerHTML = "";

    // Adjust particle count based on screen size
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 25 : 400;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Random position
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";

      // Random animation delay for staggered effect
      particle.style.animationDelay = Math.random() * 4 + "s";

      // Slightly vary animation duration for more organic feel
      particle.style.animationDuration = 3 + Math.random() * 2 + "s";

      particleGrid.appendChild(particle);
    }
  }

  // Initialize animated background
  createAnimatedBackground();

  // Regenerate particles on window resize (debounced)
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      generateParticles();
    }, 500);
  });

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ============================================
  // SCROLL ANIMATIONS (Optional fade-in effects)
  // ============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe cards for fade-in effect (optional)
  document.querySelectorAll(".card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  // ============================================
  // SWIPER INITIALIZATION
  // ============================================
  if (document.querySelector(".caseSwiper")) {
    new Swiper(".caseSwiper", {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: {
        delay: 1800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
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
  }

  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
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

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  // ============================================
  // ENHANCED ANIMATED BACKGROUND
  // ============================================
  function createEnhancedBackground() {
    // Check if animated background already exists
    if (document.querySelector(".animated-bg")) {
      return;
    }

    // Create animated background container
    const animatedBg = document.createElement("div");
    animatedBg.className = "animated-bg";

    // Create gradient overlay
    const gradientOverlay = document.createElement("div");
    gradientOverlay.className = "gradient-overlay";
    animatedBg.appendChild(gradientOverlay);

    // Create grid overlay
    const gridOverlay = document.createElement("div");
    gridOverlay.className = "grid-overlay";
    animatedBg.appendChild(gridOverlay);

    // Create 4 gradient orbs
    for (let i = 1; i <= 4; i++) {
      const orb = document.createElement("div");
      orb.className = `gradient-orb orb-${i}`;
      animatedBg.appendChild(orb);
    }

    // Create connection lines container
    const connectionLines = document.createElement("div");
    connectionLines.className = "connection-lines";
    connectionLines.id = "connectionLines";
    animatedBg.appendChild(connectionLines);

    // Create particle grid
    const particleGrid = document.createElement("div");
    particleGrid.className = "particle-grid";
    particleGrid.id = "particleGrid";
    animatedBg.appendChild(particleGrid);

    // Create glow spots
    const glowSpot1 = document.createElement("div");
    glowSpot1.className = "glow-spot";
    glowSpot1.style.top = "20%";
    glowSpot1.style.left = "10%";
    animatedBg.appendChild(glowSpot1);

    const glowSpot2 = document.createElement("div");
    glowSpot2.className = "glow-spot";
    glowSpot2.style.top = "70%";
    glowSpot2.style.right = "15%";
    glowSpot2.style.animationDelay = "2s";
    animatedBg.appendChild(glowSpot2);

    // Insert at the beginning of body
    document.body.insertBefore(animatedBg, document.body.firstChild);

    // Generate particles and lines
    generateEnhancedParticles();
    generateConnectionLines();
  }

  // Generate enhanced particles with different sizes
  function generateEnhancedParticles() {
    const particleGrid = document.getElementById("particleGrid");
    if (!particleGrid) return;

    // Clear existing particles
    particleGrid.innerHTML = "";

    // Adjust particle count based on screen size
    const isMobile = window.innerWidth <= 768;
    const particleCount = isMobile ? 30 : 80; // Increased count

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      // Randomly assign sizes for depth effect
      const rand = Math.random();
      if (rand < 0.6) {
        particle.classList.add("small");
      } else if (rand < 0.9) {
        particle.classList.add("medium");
      } else {
        particle.classList.add("large");
      }

      // Random position
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";

      // Staggered animation for more organic feel
      particle.style.animationDelay = Math.random() * 3 + "s";
      particle.style.animationDuration = 2.5 + Math.random() * 1.5 + "s";

      particleGrid.appendChild(particle);
    }
  }

  // Generate floating connection lines
  function generateConnectionLines() {
    const container = document.getElementById("connectionLines");
    if (!container) return;

    // Clear existing lines
    container.innerHTML = "";

    // Adjust line count based on screen size
    const isMobile = window.innerWidth <= 768;
    const lineCount = isMobile ? 0 : 8; // No lines on mobile

    for (let i = 0; i < lineCount; i++) {
      const line = document.createElement("div");
      line.className = "line";

      // Random vertical position
      line.style.top = Math.random() * 100 + "%";

      // Random width
      line.style.width = 30 + Math.random() * 40 + "%";

      // Staggered animation
      line.style.animationDelay = Math.random() * 15 + "s";
      line.style.animationDuration = 10 + Math.random() * 10 + "s";

      container.appendChild(line);
    }
  }

  // Initialize enhanced background
  createEnhancedBackground();

  // Regenerate particles and lines on window resize (debounced)
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      generateEnhancedParticles();
      generateConnectionLines();
    }, 500);
  });

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ============================================
  // SCROLL ANIMATIONS (Optional fade-in effects)
  // ============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe cards for fade-in effect (optional)
  document.querySelectorAll(".card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });

  // ============================================
  // OPTIONAL: MOUSE PARALLAX EFFECT
  // ============================================
  let mouseX = 0;
  let mouseY = 0;
  let isMouseActive = false;

  document.addEventListener("mousemove", (e) => {
    if (window.innerWidth > 768) {
      // Only on desktop
      isMouseActive = true;
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }
  });

  // Apply subtle parallax to orbs
  function applyParallax() {
    if (!isMouseActive || window.innerWidth <= 768) return;

    const orbs = document.querySelectorAll(".gradient-orb");
    orbs.forEach((orb, index) => {
      const speed = (index + 1) * 10;
      const x = mouseX * speed;
      const y = mouseY * speed;
      orb.style.transform = `translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(applyParallax);
  }

  // Start parallax animation (optional - remove if too much)
  applyParallax();
});
