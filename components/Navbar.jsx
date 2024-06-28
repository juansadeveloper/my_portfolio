import React from 'react'
import { Link } from "react-scroll"
import { RxHamburgerMenu } from "react-icons/rx"
import { MdClose } from "react-icons/md"
// import { useState } from 'react'
import { FocusOn } from 'react-focus-on'

function Navbar( { responsive, changeResponsive}) {

 



  return (
    <div className='navbar-container' name="home">
        <ul className='navbar-menu-container'>
            {/* <li><Link  to="home" smooth={true} offset={0} duration={700}>HOME</Link></li> */}
            <li><Link  to="skills" smooth={true} offset={0} duration={700}>MY SKILLS</Link></li>
            <li><Link  to="about" smooth={true} offset={0} duration={700}>ABOUT ME</Link></li>
            <li><Link  to="proyects" smooth={true} offset={0} duration={700}>MY PROJECTS</Link></li>
            <li><Link  to="contact" smooth={true} offset={0} duration={700}>CONTACT ME</Link></li>  
        </ul>
                  
          <ul className={responsive ? "navbar-menu-container-responsive" : "responsive-hidden"} onClick={changeResponsive}>
            {responsive ? <FocusOn
          // gapMode=''
          // noIsolation
          
            >
            
            <li><Link  onClick={changeResponsive} to="home" smooth={true} offset={0} duration={700}>HOME</Link></li>
            <li><Link  onClick={changeResponsive} to="skills" smooth={true} offset={0} duration={700}>MY SKILLS</Link></li>
            <li><Link  onClick={changeResponsive} to="about" smooth={true} offset={0} duration={700}>ABOUT ME</Link></li>
            <li><Link  onClick={changeResponsive} to="proyects" smooth={true} offset={0} duration={700}>MY PROJECTS</Link></li>
            <li><Link  onClick={changeResponsive} to="contact" smooth={true} offset={0} duration={700}>CONTACT ME</Link></li>  
            </FocusOn> : ""}
        </ul>        
        <div className='burger-menu' onClick={changeResponsive}>
            {responsive ? <MdClose size={26}></MdClose> : <RxHamburgerMenu size={24}  />}
        </div>
    </div>
  )
}

export default Navbar