import React, { useCallback, useMemo } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(() => {}, []);

  const particlesOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#fff",
        },
        links: {
          color: "#fff",
          distance: 220,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 100,
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: "edge",
        },
        size: {
          value: {
            min: 1,
            max: 5,
          },
        },
      },
    }),
    []
  );

  return (
    <Particles
      className="w-full h-[calc(100vh-88px)] absolute bottom-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticlesContainer;
