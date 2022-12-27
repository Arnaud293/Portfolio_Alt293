import React from 'react';

import { StackData } from '../constants';
import StackCard from './StackCard';

function Experience() {
  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full'>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className='text-4xl font-bold border-b-4 border-purple-800 p-2 inline'>Experience</p>
                <p className='py-6'>I work with these technologies 👇</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {StackData.map((stack, index) => (
                    <StackCard key={stack.id} stack={stack} index={index} />
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience