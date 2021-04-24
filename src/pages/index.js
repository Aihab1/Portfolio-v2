import React, { useState } from 'react'
import Navbar from '../components/common/Navbar/navbar'
import Footer from '../components/common/Footer/footer'
import IntroDiv from '../components/landing/Intro/intro'
import Description from '../components/landing/Description/description'
import About from '../components/landing/About/about'
import FeaturedProjects from '../components/landing/FeaturedProjects/featuredProjects'
import Contact from '../components/landing/Contact/contact'

export default function Home() {
  const [lightMode, setLightMode] = useState(false)

  const lightModeToggleHandler = () => {
    setLightMode(!lightMode)
  }

  return (
    <div className={'outermost-index-div' + ' ' + (lightMode && ' ' + 'light')}>
      <div className='smart-scroll'>
        <Navbar lightMode={lightMode} toggleLightMode={lightModeToggleHandler} />
      </div>
      <IntroDiv />
      <div className="page-content">
        <Description lightMode={lightMode} />
        <About lightMode={lightMode} />
        <FeaturedProjects lightMode={lightMode} toggleLightMode={lightModeToggleHandler} />
        <Contact lightMode={lightMode} />
        <Footer lightMode={lightMode} />
      </div>
    </div>
  )
}
