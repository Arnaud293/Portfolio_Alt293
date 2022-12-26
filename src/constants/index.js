import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export const socialLinks = [
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
];

export const links = [
    {
        id: 1,
        link : 'home'
    },
    {
        id: 2,
        link : 'about'
    },
    {
        id: 3,
        link : 'projects'
    },
    {
        id: 4,
        link : 'experience'
    },
    {
        id: 5,
        link : 'contact'
    }
]