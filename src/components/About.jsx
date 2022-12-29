import React from "react";
import { TypingText, TypingTextBis } from "./TextCustom";
import { AboutOne, AboutTwo } from "../constants";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      name="about"
      className="w-full h-auto md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold font-signature inline border-b-4 border-purple-800">
            About
          </p>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, mount: 0.25 }}
        >
          <TypingText text={AboutOne} />
          <br />
          <TypingTextBis text={AboutTwo} />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
