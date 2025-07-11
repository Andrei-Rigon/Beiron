particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#ff914d" },
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      random: true,
    },
    size: {
      value: 4,
      random: true,
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "top",
      out_mode: "out",
      straight: false,
    },
    line_linked: { enable: false },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
    },
  },
  retina_detect: true,
});
