import React from 'react';

import { ProjectsData } from '../constants';
import ProjectCard from './ProjectCard';

// Animations
import { staggerContainer } from '../utils/motion';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <div name='projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white'>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
          <div className="pb-8">
            <p className='text-4xl font-bold inline border-b-4 border-purple-800'>Projects</p>
            <p className='py-6'>Take a look right here 👀</p>
          </div>
          <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 px-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, mount: 0.25}}>
            {ProjectsData.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
          
        </div>
    </div>
  )
}

export default Projects