import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import ParticlesContainer from "./ParticlesContainer";

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex justify-center items-center">
      <ParticlesContainer />
      <div
        className={`max-w-7xl pt-[88px] mx-auto ${styles.paddingX} flex flex-col gap-5 z-20`}
      >
        <div className="mt-[-88px]">
          <h1 className={`${styles.heroHeadText} text-white text-center`}>
            Hi, I'm <span className="text-[#915EFF]">Andrei</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 text-center`}
          >
            I work as a full-stack web developer
          </p>
        </div>
        <div className="flex items-center">
          <div className="w-full h-1 violet-gradient" />
          <div className="w-5 h-5 rounded-full bg-white" />
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-16 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
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
