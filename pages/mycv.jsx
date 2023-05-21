import React from 'react'
import Link from 'next/link'

export default function mycv() {
  return (
    <div className='future-container'>
        <h1>We Create Our Future</h1>
        <p>Is our responsability to create a better future</p>
        <button><Link href="/" className='future-btn-link'>Volver</Link></button>
    </div>
  )
}

