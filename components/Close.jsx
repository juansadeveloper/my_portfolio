import React from 'react'
import { Link } from 'react-scroll'

function Close() {
  return (
    <div className='close-container'>
        <h1>Make it happen!</h1>
        <p>Connect with me and see what we can do together.</p>
        <Link  to="contact" smooth={true} offset={0} duration={700}><button>Let´s do this</button></Link>
    </div>
  )
}

export default Close