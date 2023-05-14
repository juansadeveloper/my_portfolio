import React from 'react'
import Image from 'next/image'
import uno from "assets/future_images/seis.jpg"
import Link from 'next/link'

function future() {
  return (
    <div className='future-container'>
        <h1>We Create Our Future</h1>
        <Image src={uno} alt="background" className='future-background-img'></Image>
        <p>Is our responsability to create a better future</p>
        <button><Link href="/" className='future-btn-link'>Volver</Link></button>
    </div>
  )
}

export default future