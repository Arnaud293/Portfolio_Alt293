import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full mt-20">
            {/* After get framer motion this will be typing text */}
            <h2 className="text-white sm:text-3xl text-6xl font-bold ">I'm a React Developer</h2>
            <p className="text-white/70 py-4 max-w-md">
                Before being a developer, I am a curious and enthusiastic
                personality. Driven by the need for accomplishment, I am counting on
                you to give me new challenges to take up!
            </p>
            <div>
                <Link to='projects' smooth duration={500}>
                <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-500 to-purple-900 cursor-pointer">
                    Projects <span className="group-hover:rotate-90 duration-300"><HiOutlineArrowRightCircle size={25} className="ml-1" /></span>
                </button>
                </Link>
            </div>
            </div>
            <div className="md:h-2/4 md:w-1/3">
                <img src={HeroImage} alt="profile-picture-arnaud" className="rounded-2xl mx-auto w-2/4 md:w-full object-cover"/>
            </div>
      </div>
    </div>
  );
}

export default Home;
