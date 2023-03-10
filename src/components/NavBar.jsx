import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

// Consts
import { links } from '../constants';

function NavBar() {

    const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-10'>
        <div className="">
            <h1 className='font-signature text-3xl ml-2'>Arnaud</h1>
        </div>
        <ul className="hidden md:flex">
            {links.map((item) => (
                <li key={item.id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 '>
                    <Link to={item.link} smooth duration={500} spy={true} activeClass='text-purple-800'>{item.link}</Link>
                </li>
            ))}  
        </ul>
        <div className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden " onClick={() => setNav(!nav)}>
            {nav ? <FaTimes size={30}/> : <FaBars size={30}/> }  
        </div>
        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>
            {links.map((item) => (
                <li key={item.id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                    <Link onClick={() => setNav(false)} to={item.link} smooth duration={500}>{item.link}</Link>
                </li>
            ))} 
            </ul>
        )}

    </div>
  )
}

export default NavBar