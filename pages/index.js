import About from '@/components/About'
import Close from '@/components/Close'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Proyects from '@/components/Proyects'
import Head from 'next/head'
import Footer from "@/components/Footer"
import Thanks from '@/components/Thanks'
import { useState } from 'react'
import Skills from '@/components/Skills'
import AboutInfo from '@/components/AboutInfo'


export default function Home() {

  const [component, setComponent] = useState(false)
  function changeComponent(){
      setComponent(true)
  }

  const [about, setAbout] = useState(false)
  function changeAbout(){
    setAbout(true)
  }

  const [responsive, setResponsive] = useState(false)
  function changeResponsive(){
    setResponsive(!responsive)
    document.body.style.overflow = 'hidden';
  }

  return (
    <>
      <Head>
        <title>Santiago Pereira</title>
        <meta name="description" content="Portfolio Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=""></main>
      <Navbar responsive={responsive} changeResponsive={changeResponsive} />
      <Hero />
      <Skills />
      {about ? <AboutInfo /> : <About changeAbout={changeAbout} />}
      <Proyects />
      {component ? <Thanks /> : <Contact changeComponent={changeComponent} />}
      {/* <Contact /> */}
      <Close></Close>
      <Footer />
      {/* <Thanks /> */}
      {/* <AboutInfo /> */}
    </>
  )
}
