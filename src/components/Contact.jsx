import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div name="contact" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-purple-800">Contact</p>
          <p className="py-6">Let's get in touch !</p>
        </div>
        {/*  */}
        <ContactForm />
        {/* <div className="flex justify-center items-center">
          <form action="" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your mail"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Message ..."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-purple-500 to-purple-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
