import React from 'react'
import { Link } from 'react-scroll'

function AboutInfo() {
  return (
    <div className='about-container' name="about">
        <h2>More about me</h2>
        <div className='about-extra'>        
        <h2 className='about-title'>I´m a traveler. I´m creative.</h2>   
            <div style={{margin: "10px 0px 20px", lineHeight: "40px"}}>
            <ul>
            <li style={{color: "blue", fontSize: "24px"}}><p>I born and grow up in Argentina.</p></li>
            <li style={{color: "blue", fontSize: "24px"}}><p>I studied a university degree in accounting and then started to travel and moved to Europe, now I´m currently living in Ireland.</p></li> 
            <li style={{color: "blue", fontSize: "24px"}}><p>I speak spanish and english (and a bit of italian).</p></li> 
            <li style={{color: "blue", fontSize: "24px"}}><p>I like to learn languages and get to know people from different parts of the world experiencing divergent cultures.</p> </li>
            <li style={{color: "blue", fontSize: "24px"}}><p>I have a curious mind.</p></li> 
            <li style={{color: "blue", fontSize: "24px"}}><p>In my free time I like to read and journal.</p></li> 
            <li style={{color: "blue", fontSize: "24px"}}><p>I´m always looking to learn new things and improve my life.</p></li>
            </ul>
            </div>
            <h3>Life is good</h3>
        <Link  to="contact" smooth={true} offset={0} duration={700}><button className='normal-button'>Contact Me</button></Link>
        </div>
   
    </div>
  )
}

export default AboutInfo