import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


export default function Particle(){
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
        id="tsparticles"  
        init={particlesInit}
        loaded={particlesLoaded}

        options={
            {

    "fullScreen": {
        "enable": true,
        "zIndex": -10
    },
    "fpsLimit": 120,
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#000000",
            "animation": {
                "enable": true,
                "speed": 20,
                "sync": true
            }
        },
        "opacity": {
            "value": 0.5
        },
        "size": {
            "value": {
                "min": 0.1,
                "max": 3
            }
        },
        "links": {
            "enable": true,
            "distance": 100,
            "color": "#000000",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "outModes": {
                "default": "out"
            }
        }
    },
    "interactivity": {
        "events": {
            "onHover": {
                "enable": true,
                "mode": "repulse"
            },
            "onClick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 200
            },
            "push": {
                "quantity": 4
            }
        }
    },
    "detectRetina": true,
    "background": {
        "color": "#FFFFFF"
    }
            }
        }

        />
    )
}