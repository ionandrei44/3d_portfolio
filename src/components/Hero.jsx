import { motion } from "framer-motion";

import { styles } from "../styles";
import ParticlesContainer from "./ParticlesContainer";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tooltip } from "@material-tailwind/react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <ParticlesContainer />
      <div
        className={`max-w-7xl pt-[88px] mx-auto ${styles.paddingX} flex flex-col gap-5 z-20`}
      >
        <div className="mt-[-88px]">
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Hi, I'm <span className="text-azure">Andrei</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-center max-w-xl`}
          >
            Unveiling the beauty of simplicity, I engineer applications that
            intuitively guide users on their digital journey.
          </p>
        </div>

        <div className="flex items-center gap-3 mx-auto">
          <Tooltip content="GitHub Profile">
            <GitHubIcon
              fontSize="large"
              className="cursor-pointer"
              onClick={() =>
                window.open("https://github.com/ionandrei44", "_blank")
              }
            />
          </Tooltip>

          <Tooltip content="LinkedIn Profile">
            <div
              className="bg-white h-[26.25px] w-[26.25px] flex justify-center items-center rounded-md
          "
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ionandreigabriel/",
                  "_blank"
                )
              }
            >
              <LinkedInIcon
                fontSize="large"
                className="cursor-pointer text-[#0077B5]"
              />
            </div>
          </Tooltip>
        </div>

        <div className="flex items-center">
          <div className="w-full h-1 hero-gradient" />
          <div className="w-5 h-5 rounded-full bg-white" />
        </div>
      </div>

      <div className="absolute xs:bottom-16 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
