/**
This is a React component called Particle which renders a particle animation using the react-tsparticles library. 
The animation includes a background color, particles with links, collision detection, interactivity, and more. 
The component initializes and loads the particle engine using useCallback and loadFull functions respectively. 
The options object is used to customize the appearance and behavior of the particles. 
The Particle component can be imported and used in other React components to display the particle animation.
 */

import React from 'react'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Particle = () => {
  const particlesInit = useCallback(async engine => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
  
  }, []);

  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  loaded={particlesLoaded}
  options={{
    background: {
      color: {
        value: "#0d48a10",
      },
    },
    fullScreen: {
      enabled: true,
      zIndex: -1,
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#a674fca7",
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1.5,
        straight: false,
      },
      number: {
        value: 100,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 2, max: 7 },
      },
    },
    detectRetina: true,
  }}
/>


  )
}

export default Particle