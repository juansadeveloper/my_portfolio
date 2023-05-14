import React from 'react'
import { BsArrowUpCircle } from "react-icons/bs"
import { Link } from 'react-scroll'

function Arrow() {
  return (
    <div className='arrow'>
        <Link  to="home" smooth={true} offset={0} duration={700}><BsArrowUpCircle size={44} /></Link>
    </div>
  )
}

export default Arrow