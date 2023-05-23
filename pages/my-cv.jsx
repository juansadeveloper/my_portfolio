import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function mycv() {
  return (
    <div className='cv-container'>
        <h1>Curriculum Vitae - Santiago Pereira</h1>
        {/* <p>Is our responsability to create a better future</p> */}
        <div className='cv-about-container'>
          <h2>ABOUT ME</h2>
          <p>I´m kind and easy-going person.</p>
          <p>In my daily life I like to read, journal and workout.</p> 
          <p>I have an strong taste for traveling and learning languages. I like to move.</p> 
          <p>At the moment I´m looking forward to learn and grow professionally.</p>
          <p>I´m based in Europe (currently Ireland but open to change location/country).</p>
        </div>
        <div className='cv-skills-container'>
          <h2>MY SKILLS</h2>
          <p>I can build websites and small web applications.{/*(HTML, CSS, JAVASCRIPT, REACT, GITHUB, FIGMA).*/}</p> 
            
          <p>I speak 2 languages: Spanish and English.</p>   
          <p>I provide High-Quality Customer Service.</p>   
          <p>I´m flexible and I have strong adaptability and patience.</p>   
          <p>I have strong creativity.</p>   
          <p>I have excellent written communication skills.</p>   
          <p>I have general software skills.</p>   
          <p>And more...</p>   
        </div>
        <div className='cv-education-container'>
          <h2>MY EDUCATION</h2>
          <h3>I went to National University of Cuyo in Argentina from 2011 to 2017.</h3> 
          <p style={{marginBottom: "8px"}}>I got a degree and high level education in Accounting & Business Administration.</p>  
          <p>I graduated with academic honors.</p>  
          <p style={{color: "#003EAA"}}><a href='https://www.uncuyo.edu.ar/' target='_blank'>www.uncuyo.edu.ar</a></p>  
          {/* <ul>
            <li>Graduated with academic honors</li>
            <li>https://www.uncuyo.edu.ar/</li>
          </ul> */}
        </div>
        <div className='cv-experiencie-container'>
        <h2>MY WORK EXPERIENCIE</h2>
          <div className='work-experiencie-card'>
              <h3>Waiter</h3> 
              <p>From: 12/2022 to 05/2023 (6 months)</p>  
              <p>At: Nevins Newfield Inn Bar and Restaurant</p> 
              <p>In: Ireland / County Mayo / Mulranny / Newfield</p>
          </div> 
          <div className='work-experiencie-card'>
              <h3>Delivery</h3> 
              <p>From: 05/2019 to 01/2020 (9 months)</p>  
              <p>At: Glovo</p> 
              <p>In: Spain / Balearic Islands / Palma de Mallorca</p>
          </div> 
          <div className='work-experiencie-card'>
              <h3>Waiter & Bartender</h3> 
              <p>From: 04/2018 to 11/2018 (8 months)</p>  
              <p>At: Calypso Restaurant</p> 
              <p>In: Spain / Balearic Islands / Palma de Mallorca / Cala major</p>
          </div> 
          <div className='work-experiencie-card'>
              <h3>Lift Operator</h3> 
              <p>From: 12/2016 to 03/2017 (4 months)</p>  
              <p>At: Deer Valley Resort</p> 
              <p>In: United States / Utah / Park city</p>
          </div> 
          <div className='work-experiencie-card'>
              <h3>Lodge Attendant</h3> 
              <p>From: 03/2017 to 04/2017 (1 month)</p>  
              <p>At: Deer Valley Resort</p> 
              <p>In: United States / Utah / Park city</p>
          </div> 
        </div>
        <div className='cv-contact-container'>
          <h2>CONTACT INFO</h2>
          <p>Whatsapp: +34674716133</p> 
          <p>E-mail: juansa_5@hotmail.com</p>  
          <p>Current Adress: Ireland - County Mayo - Mulranny -Newfield inn</p> 
          <p>Instagram: @juansapereira</p>
        </div>
        <div className='cv-extra-container'>
          {/* <h2>HOW DO I WORK?</h2> */}
          <h2>WANT TO KNOW MORE?</h2>
          <p>Just contact me and let´s talk.</p> 
        </div>
        {/* <Footer></Footer> */}
    </div>
  )
}

