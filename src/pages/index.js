import React, { useState } from 'react'
import { Helmet } from "react-helmet"
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
      <Helmet>
        {!lightMode && <meta name="theme-color" content="#000" />}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Aihab Umair</title>
      </Helmet>
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
