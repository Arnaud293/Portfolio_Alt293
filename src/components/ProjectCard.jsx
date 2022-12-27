import React from 'react';
import { Link } from 'react-router-dom';

import { FaGithub } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';

const ProjectCard = ({ project }) => 
  (
    <div className="shadow-md shadow-gray-700 rounded-lg">
    <img src={project.imgUrl} alt={project.title} className='rounded-md duration-200 hover:scale-105 w-full h-[65%]'/>
    <div className='flex items-center justify-center'>
        <button className=' flex justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>{<IoEyeSharp size={30} />}</button>
        <button className=' flex justify-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>{<FaGithub size={30} />}</button>
    </div>
    </div>          
  )


export default ProjectCard