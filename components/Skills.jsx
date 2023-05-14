import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import figma from "@/assets/logos/figma.png"
import html from "@/assets/logos/html.png"
import css from "@/assets/logos/css.png"
import javascript from "@/assets/logos/javascript1.png"
import github from "@/assets/logos/github.png"
import react from "@/assets/logos/react.png"

function Skills() {
  return (
    <div className='skills-container' name="skills">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: .1 }}
            transition={{ duration: 0.6 }}
            variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
            }}
        ><h2>My Skills</h2>
        <p>I want to help you turn your idea into reality using these amazing technologies:</p>
        <div className='skills-container-grid'>
            <div className='skills-card-container'>
                <Image src={html}  width={80} height={80}></Image>
                <h3>HTML</h3>
            </div>
            <div className='skills-card-container'>
                <Image src={css} className="logo-figma"></Image>
                <h3>CSS</h3>
            </div>
            <div className='skills-card-container'>
                <Image src={javascript} width={80} height={80}></Image>
                <h3>Javascript</h3>
            </div>
            <div className='skills-card-container'>
                <Image src={react} className="logo-figma"></Image>
                <h3>React</h3>
            </div>
            <div className='skills-card-container'>
                <Image src={figma} className="logo-figma"></Image>
                <h3>Figma</h3>
            </div>
            <div className='skills-card-container'>
                <Image src={github} className="logo-figma"></Image>
                <h3>Github</h3>
            </div>
        </div>
        </motion.div>
    </div>
  )
}

export default Skills