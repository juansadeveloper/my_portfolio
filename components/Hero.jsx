import React from 'react'
// import Image from 'next/image'
// import futureimg from "@/assets/future.jpg"

import TypewriterComponent from 'typewriter-effect'
import { Link } from 'react-scroll'

function Hero() {
  return (
    <div className='hero-container' >
        <div className='left-container'>
            <h1>Hello, </h1>
            <h1>I am Santiago.</h1>
            <h1>A Web Developer.</h1>
            <h1 className='hero-message'>
              <TypewriterComponent 
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: ["Welcome to my portfolio!"]
                }}
              />
            </h1>
            <p>I use the latest technologies to design beautiful and functional websites. Please take a look and feel free to contact me.</p>
            <Link to="proyects" smooth={true} offset={0} duration={700}><button className='hero-btn' >My Projects</button></Link>
            
        </div>
        {/* <div className='right-container'>
            <Link href="/future" className='future-link'>
            <div className='future-div'>
            <Image src={futureimg} alt="future_img" className='future-img' ></Image>
            </div>
            </Link>
            <div className='future-text'>
                <p>Tomorrow Never Comes <br/>
                <span id='year'>2023</span></p>
            </div>
        </div> */}
    </div>
  )
}

export default Hero