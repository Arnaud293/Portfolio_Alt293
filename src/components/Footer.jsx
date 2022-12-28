import React, { useEffect, useState } from 'react'

import { socialLinks } from '../constants';

function Footer() {
    const [toggleResponsiveFooter, setToggleResponsiveFooter] = useState(false);
    useEffect(() => {

        const changeWidth = () => {

            if(window.innerWidth > 630){
                setToggleResponsiveFooter(false);
            } else{
                setToggleResponsiveFooter(true);
            }
        }

        window.addEventListener('resize', changeWidth);

        // cleanup
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    },[])

  return (
    <div className='lg:hidden md:flex w-full h-fit bg-gray-800 py-5'>
        <ul className='flex w-full justify-center gap-4'>
            {socialLinks.map((item) => (
            <>
            {toggleResponsiveFooter ? (
                <li key={item.id} className={'flex justify-center items-center w-40 h-14 px-4 hover:rounded-md duration-200' + " " + item.style}>
                    <a className="flex justify-center items-center w-full text-white" href={item.url} download={item.download} target='_blank' rel="noreferrer">
                        {item.childSm}
                    </a>
                </li>
            ):(
                <li key={item.id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-700 hover:rounded-md duration-200' + " " + item.style}>
                <a className="flex justify-between items-center w-full text-white" href={item.url} download={item.download} target='_blank' rel="noreferrer">
                    {item.child}
                </a>
                </li>
            )}
            </>
            ))}
            
        </ul>
    </div>
  )
}

export default Footer