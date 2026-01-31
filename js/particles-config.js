// ============================================
// PARTICLES.JS CONFIGURATION
// MacroInception.ai - Neural Network Theme
// ============================================

// Mobile detection
const isMobile = window.innerWidth <= 768;
const particleCount = isMobile ? 40 : 80;
const interactivityEnabled = !isMobile;

// Initialize Particles.js with Neural Network configuration
particlesJS("particles-js", {
  particles: {
    // Particle count - automatically reduced on mobile
    number: {
      value: particleCount,
      density: {
        enable: true,
        value_area: 800,
      },
    },

    // Brand color - Indigo
    color: {
      value: "#6366f1",
    },

    // Particle shape
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },

    // Opacity animation - creates twinkling effect
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.2,
        sync: false,
      },
    },

    // Size with animation - creates pulsing effect
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false,
      },
    },

    // Connection lines - Neural network effect
    line_linked: {
      enable: true,
      distance: 150,
      color: "#10b981", // Brand green color
      opacity: 0.4,
      width: 1,
    },

    // Movement configuration
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },

  // Interactivity - disabled on mobile for performance
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: interactivityEnabled,
        mode: "grab",
      },
      onclick: {
        enable: interactivityEnabled,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 0.6,
        },
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },

  // Retina display support
  retina_detect: true,
});

// ============================================
// OPTIONAL: FPS MONITORING (Remove in production)
// ============================================
/*
let lastTime = performance.now();
let frames = 0;
let fps = 0;

function monitorFPS() {
  const now = performance.now();
  frames++;
  
  if (now >= lastTime + 1000) {
    fps = Math.round((frames * 1000) / (now - lastTime));
    console.log('Particles.js FPS:', fps);
    frames = 0;
    lastTime = now;
  }
  
  requestAnimationFrame(monitorFPS);
}

// Uncomment to monitor FPS in console
// monitorFPS();
*/

// ============================================
// ALTERNATIVE CONFIGURATIONS
// ============================================

// Uncomment the configuration you want to use instead:

/*
// CONSTELLATION - More connected, more visible
particlesJS('particles-js', {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: ["#6366f1", "#10b981", "#8b5cf6"] },
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      random: false,
      anim: { enable: true, speed: 0.5, opacity_min: 0.3, sync: false }
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: false }
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#6366f1",
      opacity: 0.5,
      width: 2
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: interactivityEnabled, mode: "repulse" },
      onclick: { enable: interactivityEnabled, mode: "bubble" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      bubble: { distance: 250, size: 8, duration: 2, opacity: 0.8 }
    }
  },
  retina_detect: true
});
*/

/*
// MINIMAL - Very subtle
particlesJS('particles-js', {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 1000 } },
    color: { value: "#6366f1" },
    shape: { type: "circle" },
    opacity: {
      value: 0.3,
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 2,
      random: true,
      anim: { enable: true, speed: 1, size_min: 0.5, sync: false }
    },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});
*/

/*
// FLOATING BUBBLES - Organic feel
particlesJS('particles-js', {
  particles: {
    number: { value: 50, density: { enable: true, value_area: 800 } },
    color: { value: ["#6366f1", "#10b981"] },
    shape: {
      type: "circle",
      stroke: { width: 1, color: "#6366f1" }
    },
    opacity: {
      value: 0.4,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 8,
      random: true,
      anim: { enable: true, speed: 3, size_min: 2, sync: false }
    },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 1.5,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: interactivityEnabled, mode: "bubble" },
      onclick: { enable: interactivityEnabled, mode: "repulse" },
      resize: true
    },
    modes: {
      bubble: { distance: 200, size: 12, duration: 2, opacity: 0.6 },
      repulse: { distance: 150, duration: 0.4 }
    }
  },
  retina_detect: true
});
*/

// ============================================
// DYNAMIC CONFIG SWITCHER (Optional)
// ============================================

// Function to switch between configurations dynamically
function loadParticlesPreset(preset) {
  const configs = {
    neural: {
      /* Neural config here */
    },
    constellation: {
      /* Constellation config here */
    },
    minimal: {
      /* Minimal config here */
    },
    bubbles: {
      /* Bubbles config here */
    },
  };

  if (configs[preset]) {
    // Destroy current instance
    if (window.pJSDom && window.pJSDom.length) {
      window.pJSDom[0].pJS.fn.vendors.destroypJS();
      window.pJSDom = [];
    }

    // Load new config
    particlesJS("particles-js", configs[preset]);
  }
}

// Example usage:
// loadParticlesPreset('constellation');

console.log("✨ Particles.js initialized successfully!");
console.log("Particle count:", particleCount);
console.log(
  "Interactivity:",
  interactivityEnabled ? "Enabled" : "Disabled (mobile)"
);
