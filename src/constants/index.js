import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

// Projects SRC

import Metaversus from '../assets/portfolio/metaversus.png';
import CloneTube from '../assets/portfolio/clone-tube.png';
import Nitflex from '../assets/portfolio/nitflex.png';
import Crypto from '../assets/portfolio/crypto_desktop.png';
import Resto from '../assets/portfolio/theresto.png';
import Groupomania from '../assets/portfolio/groupomania.png';
import Kanap from '../assets/portfolio/kanap.png';
import OhMyFood from '../assets/portfolio/ohmyfood.png';
import Panthere from '../assets/portfolio/panthere.png';

// Stack SRC 

import Css from '../assets/css.png';
import Html from '../assets/html.png';
import Firebase from '../assets/firebase.png';
import Github from '../assets/github.png';
import Javascript from '../assets/javascript.png';
import Nextjs from '../assets/nextjs.png';
import Node from '../assets/node.png';
import Reactjs from '../assets/react.png';
import Redux from '../assets/redux.png';
import Sass from '../assets/sass.png';
import Tailwind from '../assets/tailwind.png';

export const StackData = [
    {
        id: 1,
        url : Css,
        title: 'CSS',
        style : 'shadow-blue-500',
    },
    {
        id: 2,
        url : Html ,
        title: 'HTML',
        style : 'shadow-orange-500',
    },
    {
        id: 3,
        url : Javascript ,
        title: 'Javascript',
        style : 'shadow-yellow-500',
    },
    {
        id: 4,
        url : Reactjs ,
        title: 'React',
        style : 'shadow-cyan-500',
    },
    {
        id: 5,
        url : Redux ,
        title: 'Redux',
        style : 'shadow-purple-800',
    },
    {
        id: 6,
        url : Node ,
        title: 'Nodejs',
        style : 'shadow-green-600',
    },
    {
        id: 7,
        url : Nextjs ,
        title: 'Nextjs',
        style : 'shadow-white',
    },
    {
        id: 8,
        url : Sass ,
        title: 'Sass',
        style : 'shadow-pink-500',
    },
    {
        id: 9,
        url : Tailwind ,
        title: 'Tailwind',
        style : 'shadow-sky-500',
    },
    {
        id: 10,
        url : Github ,
        title: 'GitHub',
        style : 'shadow-gray-600',
    },
    {
        id: 11,
        url : Firebase ,
        title: 'Firebase',
        style : 'shadow-yellow-500',
    },
];

export const socialLinks = [
    {
        id: 1,
        child: (
            <>LinkedIn <FaLinkedin size={30} /></>
        ),
        url: 'https://www.linkedin.com/in/arnaud-le-tallec-106b571a7/',
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
];

export const ProjectsData = [
    {
        id: 1,
        imgUrl: Metaversus,
        title: 'Metaversus',
        demoUrl: 'https://precious-malabi-33d670.netlify.app',
        codeUrl: 'https://github.com/Arnaud293/NextJs_Metaverse_LandingPage'
    },
    {
        id: 2,
        imgUrl: CloneTube,
        title: 'CloneTube',
        demoUrl: 'https://sprightly-tiramisu-e0edbf.netlify.app',
        codeUrl: 'https://github.com/Arnaud293/ReactApp_Youtube-clone'
    },
    {
        id: 3,
        imgUrl: Nitflex,
        title: 'Nitflex',
        demoUrl: 'https://sparkling-youtiao-7bb6c8.netlify.app',
        codeUrl: 'https://github.com/Arnaud293/ReactApp_movieAPI_NetflixClone'
    },
    {
        id: 4,
        imgUrl: Crypto,
        title: 'Watch Tower',
        demoUrl: 'https://warm-biscotti-e182f7.netlify.app',
        codeUrl: 'https://github.com/Arnaud293/ReactJs_CryptoApp'
    },
    {
        id: 5,
        imgUrl: Resto,
        title: 'The Resto',
        demoUrl: 'https://arnaud293.github.io/Scss_Model_Integration_The-Resto/',
        codeUrl: 'https://github.com/Arnaud293/Scss_Model_Integration_The-Resto'
    },
    {
        id: 6,
        imgUrl: Groupomania,
        title: 'Groupomania',
        codeUrl: 'https://github.com/Arnaud293/P7_OC_DevWeb'
    },
    {
        id: 7,
        imgUrl: Kanap,
        title: 'Kanap',
        codeUrl: 'https://github.com/Arnaud293/P5_OC_KANAP'
    },
    {
        id: 8,
        imgUrl: OhMyFood,
        title: 'Oh My Food',
        demoUrl: 'https://arnaud293.github.io/OhMyFood_P3_OC/',
        codeUrl: 'https://github.com/Arnaud293/OhMyFood_P3_OC'
    },
    {
        id: 9,
        imgUrl: Panthere,
        title: 'La Panthère',
        demoUrl: 'https://arnaud293.github.io/Projet4_OC_LaPanthere/',
        codeUrl: 'https://github.com/Arnaud293/Projet4_OC_LaPanthere'
    }
]