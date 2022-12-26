import React from 'react';

import { socialLinks } from '../constants';

function SocialLinks() {

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {socialLinks.map((item) => (
            <li key={item.id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-700 hover:ml-[-10px] hover:rounded-md duration-200' + " " + item.style}>
                <a className="flex justify-between items-center w-full text-white" href={item.url} download={item.download} target='_blank' rel="noreferrer">
                    {item.child}
                </a>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default SocialLinks