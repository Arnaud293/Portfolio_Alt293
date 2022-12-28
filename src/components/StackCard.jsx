import React from 'react'

// Animations
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

function StackCard({stack, index}) {
  return (
    <motion.div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${stack.style}`}
    variants={fadeIn('up', 'tween', 0.3, 1)}>
        <img src={stack.url} alt={stack.title} className='w-20 mx-auto' />
        <p className='mt-4'>{stack.title}</p>
    </motion.div>
  )
}

export default StackCard