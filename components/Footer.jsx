import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { FiMail } from "react-icons/fi"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"
import Arrow from './Arrow'
import { Link } from 'react-scroll'
import { BsWhatsapp } from "react-icons/bs"



function footer() {
  return (
    <div className='footer-container'>
        <ul className='footer-ul'>
            <a href='https://api.whatsapp.com/send/?phone=353899696179&text&type=phone_number&app_absent=0' target="_blank"><li><BsWhatsapp size={28}/></li></a>
            <Link to="contact" smooth={true} offset={0} duration={700}><li><FiMail size={28}/></li></Link>
            <a href='https://www.instagram.com/juansapereira/' target="_blank"><li><BsInstagram  size={28}/></li></a>
            <a href='https://www.linkedin.com/in/santiago-pereira-dev' target="_blank"><li><BsLinkedin size={28}/></li></a>
            <a href='https://github.com/juansadeveloper' target="_blank"><li><BsGithub size={28}/></li></a>
        </ul>
    </div>
  )
}

export default footer