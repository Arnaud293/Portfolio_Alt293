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
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
