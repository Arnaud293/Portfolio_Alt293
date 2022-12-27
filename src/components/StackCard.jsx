import React from 'react'

function StackCard({stack, index}) {
  return (
    <div className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${stack.style}`}>
        <img src={stack.url} alt={stack.title} className='w-20 mx-auto' />
        <p className='mt-4'>{stack.title}</p>
    </div>
  )
}

export default StackCard