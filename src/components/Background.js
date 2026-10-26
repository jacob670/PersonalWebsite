import { useEffect, useId } from "react";
import "particles.js";

const particlesConfig = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 900,
      },
    },
    color: {
      value: ["#cffafe", "#dbeafe", "#c4b5fd", "#7dd3fc"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.9,
      random: true,
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2.5,
        size_min: 1.2,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 90,
      color: "#67e8f9",
      opacity: 0.5,
      width: 1.8,
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onmousemove: {
        enable: true,
        mode: "grab",
      },
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 220,
        line_linked: {
          opacity: 1,
          width: 2.2,
          color: "#a5f3fc",
        },
      },
      push: {
        particles_nb: 5,
      },
    },
  },
  retina_detect: true,
};

function Background() {
  const id = useId().replace(/:/g, "");

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    if (!window.particlesJS) {
      console.warn("particles.js failed to load");
      return undefined;
    }

    const target = document.getElementById(id);
    if (!target) {
      return undefined;
    }

    const existingCanvas = target.querySelector("canvas.particles-js-canvas-el");
    if (existingCanvas) {
      existingCanvas.remove();
    }

    window.particlesJS(id, particlesConfig);

    return () => {
      const canvas = target.querySelector("canvas.particles-js-canvas-el");
      if (canvas) {
        canvas.remove();
      }
      if (window.pJSDom) {
        window.pJSDom = [];
      }
    };
  }, [id]);

  return <div id={id} className="background-particles" aria-hidden="true" />;
}

export default Background;
