import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
        //console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        //console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            style={{
                width: "100%",
                height: "100%",
                position: "absolute",
                top: "0",
                left: "0"
            }}
            params={{
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: true,
                            value_area: 1500
                        }
                    },
                    size: {
                        value: 1,
                        random: true,
                        anim: {
                            speed: 4,
                            size_min: 0.3
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        direction: "right",
                        enable: true,
                        outMode: "out",
                        random: true,
                        speed: 1,
                        straight: true,
                    }
                },
                interactivity: {
                    events: {
                        onhover: {
                            enable: true,
                            mode: "bubble"
                        },
                        // onclick: {
                        //     enable: true,
                        //     mode: "repulse"
                        // }
                    },
                    modes: {
                        bubble: {
                            distance: 250,
                            duration: 4,
                            size: 0,
                            opacity: 0
                        },
                        // repulse: {
                        //     distance: 400,
                        //     duration: 4
                        // }
                    },
                },
                retina_detect: true,
            }}
        />
    );
};

export default Particle