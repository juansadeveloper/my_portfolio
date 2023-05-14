import React from 'react'
import profileimg from "@/assets/profile-pic.JPG"
import Image from 'next/image'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

function About({ changeAbout}) {
  return (
    <div className='about-container' name="about">
        <h2>About me</h2>
        <p>I have 2 years of experience in web development.</p>   
        <p>I´m a creative person who wants to add value to the world.</p>
        {/* <motion.div

          initial={{ opacity: 0}}
          whileInView={{ opacity: 1}}
          viewport={{ once: true }}
          transition={{ duration: 5}}        >
          <Image src={profileimg} alt="profile-pic" className='profile-img' onClick={changeAbout}></Image>
        </motion.div> */}
          <Image src={profileimg} alt="profile-pic" className='profile-img' onClick={changeAbout}
          ></Image>
        
        <p >I am always excited to work on new projects, message me and let's talk.</p>
        <Link  to="contact" smooth={true} offset={0} duration={700}><button className='normal-button'>Contact Me</button></Link>
    </div>
  )
}

export default About