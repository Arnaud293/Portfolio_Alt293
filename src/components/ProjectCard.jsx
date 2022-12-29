import React, { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

// Animations
import { fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="shadow-md border-solid border-[1px] border-gray-800 rounded-lg"
      variants={fadeIn("right", "spring", index * 0.3, 0.75)}
    >
      <div className="h-[75%] relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img
          src={project.imgUrl}
          alt={project.title}
          className="rounded-tr-md rounded-tl-md duration-200 w-full h-full"
          
        />
        {isHovered && (
          <div className="absolute top-0 w-full h-full flex flex-col items-center backdrop-brightness-50">
            <p className="text-white font-signature uppercase mt-5">{project.title}</p>
            <div className="flex flex-row flex-wrap w-full h-full justify-center gap-4">
              {project.stack.map((item) => (
                <img src={item} alt='stack-logo' className=" h-[25%] mt-10 " />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center h-[25%]">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            className="flex justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:brightness-75"
          >
            <button>{<IoEyeSharp size={30} />}</button>
          </a>
        )}
        <a
          href={project.codeUrl}
          target="_blank"
          className="flex justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:brightness-75"
        >
          <button>{<FaGithub size={30} />}</button>
        </a>
      </div>
    </motion.div>
  );
};
export default ProjectCard;
