import React from 'react';

import { FaGithub } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

// Animations
import { fadeIn } from '../utils/motion';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
 return (
    <motion.div className="shadow-md shadow-gray-700 rounded-lg"
    variants={fadeIn('right', 'spring', index * 0.3, 0.75)}>
    <img src={project.imgUrl} alt={project.title} className='rounded-md duration-200 hover:scale-105 w-full h-[65%]'/>
    <div className='flex items-center justify-center'>
        {project.demoUrl && (
        <a href={project.demoUrl} target="_blank" className='flex justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:brightness-75'>
        <button>{<IoEyeSharp size={30} />}</button>
        </a>
        )}
        <a href={project.codeUrl} target="_blank" className='flex justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:brightness-75'>
        <button>{<FaGithub size={30} />}</button>
        </a>
    </div>
    </motion.div>          
  )

}
export default ProjectCard