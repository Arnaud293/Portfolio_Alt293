import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function SocialLinks() {

    const socialLinks = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={30} /></>
            ),
            url: 'https://linkedin.com',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>GitHub <FaGithub size={30} /></>
            ),
            url: 'https://github.com/Arnaud293',
        },
        {
            id: 3,
            child: (
                <>Mail <HiOutlineMail size={30} /></>
            ),
            url: 'mailto:arnaudlt293@gmail.com',
        },
        {
            id: 4,
            child: (
                <>Resume <BsFillPersonLinesFill size={30} /></>
            ),
            url: '/resume.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

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