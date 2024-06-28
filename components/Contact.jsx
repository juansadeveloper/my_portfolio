import React from 'react'
import emailjs from "@emailjs/browser"
import { useRef } from 'react'
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';



function Contact({ changeComponent }) {    

    const form = useRef();
    // const navigate = useNavigate();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('contact_form', 'primer_portfolio', form.current, 'L7JCpIRXMnPe-nE8-')
        .then((result) => {
            console.log("Message successfully sent");
        }, (error) => {
            console.log("Failed to send the message, please try again");
        });
        e.target.reset();
        changeComponent()
        // navigate("/Thankful")
    };

  return (
    <div name="contact" className='contact-container'>
        <div>
            <div className='contact-head'>
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .6 }}
                transition={{ duration: 0.9 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
                <h2>Send me a message!</h2>
                </motion.div>
                <p>I´m interested in every kind of projects.</p>
            </div>
            <div className='form-container'>
                <form  action="https://google.com" ref={form} onSubmit={sendEmail}>
                    <input  type='text' placeholder='Name'  name="user_name" />
                    <input type='email' placeholder='Email'  name="user_email" />
                    {/* <input type='email' placeholder='Subject' data-aos='flip-up' /> */}
                    <textarea   cols='30' placeholder='Message' rows='10'  name='message'></textarea>
                    <button  type="submit" value="Send" className='normal-button' >Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact