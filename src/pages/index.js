import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useStateValue } from "../contextapi/StateProvider"

import Navbar from "../components/common/Navbar/navbar"
import Footer from "../components/common/Footer/footer"
import IntroDiv from "../components/landing/Intro/intro"
import Description from "../components/landing/Description/description"
import About from "../components/landing/About/about"
import FeaturedProjects from "../components/landing/FeaturedProjects/featuredProjects"
import Contact from "../components/landing/Contact/contact"

export default function Home() {
  const [{ lightMode }, dispatch] = useStateValue()
  let [showIntro, setShowIntro] = useState(true);
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (
      !(
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) &&
      !localTheme
    ) {
      dispatch({
        type: "LIGHT_THEME",
      })
    } else if (localTheme) {
      if (localTheme !== "light") {
        dispatch({
          type: "DARK_THEME",
        })
      } else {
        dispatch({
          type: "LIGHT_THEME",
        })
      }
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowIntro(false);
    }, 2600)
  }, [])

  if(showIntro) {
    return <IntroDiv />
  }

  return (
    <div className={`outermost-index-div ${lightMode && "light"}`}>
      <Helmet>
        {!lightMode && <meta name="theme-color" content="#000" />}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The Home Page of Aihab Umair's personal portfolio website."
        />
        <title>Aihab Umair</title>
      </Helmet>
      <div className="smart-scroll">
        <Navbar />
      </div>
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
