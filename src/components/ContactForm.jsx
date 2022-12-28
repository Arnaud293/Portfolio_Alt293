import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {init} from '@emailjs/browser';
init('KHbVGqTOezvGa23Ot');

const ContactForm = () => {

  
    const form = useRef();
    const emailJsTemplate='template_k3psm0m';
    const emailJsService='service_wny7r1t';

    const sendEmail= (e) => {
      e.preventDefault();
      const formMessage = document.querySelector('.formMessage');
  
      emailjs.sendForm(
        emailJsService,
        emailJsTemplate,
        form.current,
      )
      .then(
        (res) => {
          console.log(res.text);
          form.current.reset();
          formMessage.innerHTML = "<p class='success'> Message envoyé ! <p>";
  
          setTimeout(() => {
            formMessage.innerHTML= '';
  
          }, 2000)
        },
        (err) => {
          console.log(err.text);
          formMessage.innerHTML = "<p class='error'> Une erreur s'est produite, veuillez réessayer</p>";
  
          setTimeout(() =>{
            formMessage.innerHTML = '';
          }, 2000)
        }
      )
    }

  return (
    <div className='flex flex-col justify-center items-center'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='name' required autoComplete="off" id='name' placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
            <input type='email' name='email' required autoComplete="off" id='email' placeholder="Enter your mail"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
            <textarea
              name="message"
              rows="10"
              placeholder="Message ..."
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none resize-none"
            ></textarea>
            <input type='submit' value="Let's Talk" className='"text-white bg-gradient-to-b from-purple-500 to-purple-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"'/>
        </form>
        <div className='formMessage'></div>
    </div>
  )
}

export default ContactForm