import React from 'react'
// import profileimg from "@/assets/profile-pic.jpg"
import Image from 'next/image'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function About({ changeAbout}) {
  return (
    <div className='about-container' name="about">
      <div>
          <h2>About me</h2>
          <p>I have 2 years of experience in web development.</p>   
          <p>I´m a creative person who wants to add value to the world.</p>
          {/* <motion.div

            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 5}}        > */}
            <Image src="/profile-pic3.png" alt="profile-pic" priority={false} width={1000} height={1000} className='profile-img' onClick={changeAbout}></Image>
          {/* </motion.div> */}
            {/* n */}
          
          <p >I am always excited to work on new projects, message me and let's talk.</p>
          <Link  to="contact" smooth={true} offset={0} duration={700}><button className='normal-button'>Contact Me</button></Link>
        </div>
    </div>
  )
}

export default About