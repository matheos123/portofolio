import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const title = "Project 1";

const Project = ({ title, subtitle }) => {
  //   const overlayStyles = `absolute h-full w-full opacity-0 hover:opactiy-90 transition duration-500
  //       bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue
  //     `;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div
        className={`absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
      bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue
      `}
      >
        <p className="text-l font-playfair">{title}</p>
        <p className="mt-2 text-[16px]">{subtitle}</p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};
const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-20">
      <motion.div
        className={`md:w-2/5 mx-auto text-center`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>{" "}
        </div>
        <p className={`mt-5 mb-5`}>
          Here are some projects I have been working on.
        </p>
      </motion.div>
      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className={`sm:grid sm:grid-cols-3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" subtitle="Rick and Morty" />
          <Project
            title="Project 2"
            subtitle="Movie suggestion with Redux and React"
          />

          <Project
            title="Project 3"
            subtitle="music player with Redux & React"
          />
          <Project title="Project 4" subtitle="Food Delivery App" />

          <div
            className="flex justify-center text-center items-center p-10 bg-blue
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold

      "
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
