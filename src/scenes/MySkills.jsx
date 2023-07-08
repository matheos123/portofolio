import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import ProgressBar from "../components/ProgressBar";
import { motion } from "framer-motion";
import React from "react";
import Skills from "../components/Skills";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width : 1060px)");

  return (
    <div id="skills" className={`pt-10 pb-20 min-h-full`}>
      <div className={` md:flex  md:justify-between md:gap-16 mt-5 `}>
        <motion.div
          className={`md:w-1/3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className={`font-playfair font-semibold text-4xl mb-5`}>
            My <span className={`text-red`}>Skills</span>
          </p>

          <LineGradient width="w-2/3" />
          <div
            className={`md:flex flex-col md:justify-between md:gap-7 sm:gap-7  `}
          >
            <Skills width="w-[80%]" title={"HTML&CSS"} percent={"80%"} />
            <Skills width="w-[60%]" title={"REACT JS"} percent={"60%"} />
            <Skills width="w-[50%]" title={"REACT NATIVE"} percent={"50%"} />
            <Skills width="w-[50%]" title={"TAILWIND CSS"} percent={"50%"} />
            <Skills width="w-[50%]" title={"PHP"} percent={"50%"} />
          </div>
        </motion.div>
        <div className={`mt-16 md:mt-0`}>
          {isAboveMediumScreens ? (
            <div
              className={`relative z-0 ml-20 before:absolute before:-top-10 before:-left-20
           before:w-full
          before:h-full 
          before:border-2 before:border-blue before:z-[-1]
          `}
            >
              <img
                className={`z-10 mt-8`}
                src="../assets/skills-image.png"
                alt="skills"
              />
            </div>
          ) : (
            <img
              className={`z-10`}
              src="../assets/skills-image.png"
              alt="skills"
            />
          )}
        </div>
      </div>
      {/* SEction */}
      <div className="md:flex md:justify-center mt-16 gap-32">
        <motion.div
          className={`md:w-1/3 mt-10`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3 ">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] " />
          </div>
          <p className="mt-5">
            I have Experience in Front End Website and Mobile application
            development and deployment.
          </p>
        </motion.div>

        {/*  */}
        <motion.div
          className={`md:w-1/3 mt-10`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3 ">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1] " />
          </div>
          <p className="mt-5">
            I have creative and innovative mindset for development.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className={`md:w-1/3 mt-10`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3 ">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1] " />
          </div>
          <p className="mt-5">Imagination is key and way to success.</p>
        </motion.div>
      </div>
    </div>
  );
};
export default MySkills;
