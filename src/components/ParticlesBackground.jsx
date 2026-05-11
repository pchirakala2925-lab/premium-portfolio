import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesBackground() {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{

        fullScreen:{
          enable:true,
          zIndex:-1,
        },

        background:{
          color:{
            value:"#020617",
          },
        },

        fpsLimit:120,

        interactivity:{
          events:{
            onHover:{
              enable:true,
              mode:"grab",
            },

            resize:true,
          },

          modes:{
            grab:{
              distance:180,

              links:{
                opacity:0.5,
              },
            },
          },
        },

        particles:{

          color:{
            value:["#8b5cf6","#22d3ee"],
          },

          links:{
            color:"#8b5cf6",
            distance:150,
            enable:true,
            opacity:0.2,
            width:1,
          },

          collisions:{
            enable:false,
          },

          move:{
            direction:"none",
            enable:true,
            outModes:{
              default:"bounce",
            },

            random:false,
            speed:1.5,
            straight:false,
          },

          number:{
            density:{
              enable:true,
              area:800,
            },

            value:80,
          },

          opacity:{
            value:0.5,
          },

          shape:{
            type:"circle",
          },

          size:{
            value:{
              min:1,
              max:4,
            },
          },
        },

        detectRetina:true,
      }}
    />
  );
}

export default ParticlesBackground;