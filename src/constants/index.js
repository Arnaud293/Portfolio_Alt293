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
];

export const ProjectsData = [
    {
        id: 1,
        imgUrl:'../assets/portfolio/metaversus.png',
        title: 'Metaversus',
        demoUrl: 'https://precious-malabi-33d670.netlify.app',
        codeUrl: 'https://github.com/Arnaud293/NextJs_Metaverse_LandingPage'
    },
    {
        id: 2,
        imgUrl:'../assets/portfolio/clone-tube.png',
        title: 'CloneTube',
        demoUrl: 'https://sprightly-tiramisu-e0edbf.netlify.app',
        codeUrl: 'https://github.com/Arnaud293/ReactApp_Youtube-clone'
    },
    {
        id: 3,
        imgUrl:'../assets/portfolio/nitflex.png',
        title: 'Nitflex',
        demoUrl: 'https://sparkling-youtiao-7bb6c8.netlify.app',
        codeUrl: 'https://github.com/Arnaud293/ReactApp_movieAPI_NetflixClone'
    },
    {
        id: 4,
        imgUrl:'../assets/portfolio/crypto_desktop.png',
        title: 'Watch Tower',
        demoUrl: 'https://warm-biscotti-e182f7.netlify.app',
        codeUrl: 'https://github.com/Arnaud293/ReactJs_CryptoApp'
    },
    {
        id: 5,
        imgUrl:'../assets/portfolio/theresto.png',
        title: 'The Resto',
        demoUrl: 'https://arnaud293.github.io/Scss_Model_Integration_The-Resto/',
        codeUrl: 'https://github.com/Arnaud293/Scss_Model_Integration_The-Resto'
    },
    {
        id: 6,
        imgUrl:'../assets/portfolio/groupomania.png',
        title: 'Groupomania',
        demoUrl: '',
        codeUrl: 'https://github.com/Arnaud293/P7_OC_DevWeb'
    },
    {
        id: 7,
        imgUrl:'../assets/portfolio/kanap.png',
        title: 'Kanap',
        demoUrl: '',
        codeUrl: 'https://github.com/Arnaud293/P5_OC_KANAP'
    },
    {
        id: 8,
        imgUrl:'../assets/portfolio/ohmyfood.png',
        title: 'Oh My Food',
        demoUrl: 'https://arnaud293.github.io/OhMyFood_P3_OC/',
        codeUrl: 'https://github.com/Arnaud293/OhMyFood_P3_OC'
    },
    {
        id: 9,
        imgUrl:'../assets/portfolio/panthere.png',
        title: 'La Panthère',
        demoUrl: 'https://arnaud293.github.io/Projet4_OC_LaPanthere/',
        codeUrl: 'https://github.com/Arnaud293/Projet4_OC_LaPanthere'
    }
]