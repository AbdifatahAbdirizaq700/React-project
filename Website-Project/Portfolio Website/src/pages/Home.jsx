import React from 'react'
import './Home.css'
import Header from '../Componant/Header'
import Main from '../Componant/Main.jsx'
import About from '../Componant/About.jsx'
import Skills from '../Componant/Skills.jsx'
import Contact from '../Componant/Contact.jsx'
import Footar from '../Componant/Footar.jsx'
function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Skills/>
      <About/>
      <Contact/>
      <Footar/>
      
    </div>
  )
}

export default Home


