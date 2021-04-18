import React from 'react'
import Navbar from '../components/common/Navbar/navbar'
import Footer from '../components/common/Footer/footer'
import IntroDiv from '../components/landing/Intro/intro'
import Description from '../components/landing/Description/description'
import About from '../components/landing/About/about'
import FeaturedProjects from '../components/landing/FeaturedProjects/featuredProjects'
import Contact from '../components/landing/Contact/contact'

export default function Home() {
  return (
    <div className="outermost-index-div">
      <Navbar />
      <IntroDiv />
      <div className="page-content">
        <Description />
        <About />
        <FeaturedProjects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
