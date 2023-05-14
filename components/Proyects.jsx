import React from 'react'
import { Link } from 'react-scroll'
import Image from 'next/image'
import { motion } from 'framer-motion'
import uno from "@/assets/projects/uno.jpg"
import dos from "@/assets/projects/dos.jpg"
import tres from "@/assets/projects/tres.jpg"
import cuatro from "@/assets/projects/cuatro.jpg"
import cinco from "@/assets/projects/cinco.jpg"
import seis from "@/assets/projects/siete.jpg"
import siete from "@/assets/projects/seis.jpg"
import ocho from "@/assets/projects/ocho.jpg"
// import uno from "@/assets/profile-pic.JPG"
// import ProjectCard from './ProjectCard'

function Proyects() {
  return (
    <div name="proyects" className='proyects-container'>
        <div className='proyects-subcontainer'>
          <div className='proyects-head'>
            <h2>My projects</h2>
            <p>Take a look to my current projects.</p>
          </div>
          <div className='projects-grid-container'>
          <div className='proyects-box-container'>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: .6 }}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}><Image className='projects-img' src={cinco} alt='/'></Image>
            <div className='projects-card-hover'>
              <h3>Property Finder</h3>
              <p>React JS</p>
              <a href='www.google.com'>
                <p className='paa'>More info</p>
              </a>
            </div>
          </motion.div>
          </div>
          <div className='proyects-box-container'>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: .6 }}
            transition={{ duration: 0.8 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}>
            <Image className='projects-img' src={seis} alt='/'></Image>
            <div className='projects-card-hover'>
              <h3>Property Finder</h3>
              <p>React JS</p>
              <a href='www.google.com'>
                <p className='paa'>More info</p>
              </a>
            </div>
            </motion.div>
          </div>
          <div className='proyects-box-container'>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: .6 }}
            transition={{ duration: 1 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}>
            <Image className='projects-img' src={siete} alt='/'></Image>
            <div className='projects-card-hover'>
              <h3>Property Finder</h3>
              <p>React JS</p>
              <a href='www.google.com'>
                <p className='paa'>More info</p>
              </a>
            </div>
            </motion.div>
          </div>
          <div className='proyects-box-container'>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: .6 }}
            transition={{ duration: 1.2 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}>
            <Image className='projects-img' src={ocho} alt='/'></Image>
            <div className='projects-card-hover'>
              <h3>Property Finder</h3>
              <p>React JS</p>
              <a href='www.google.com'>
                <p className='paa'>More info</p>
              </a>
            </div>
            </motion.div>
          </div>
          </div>
          <div className='proyects-contact'>
            <p style={{fontWeight: "600"}}>Want to make a project together?</p>
            <Link  to="contact" smooth={true} offset={0} duration={700}><button>Let me know</button></Link>
          </div>
        </div>
    </div>
  )
}

export default Proyects