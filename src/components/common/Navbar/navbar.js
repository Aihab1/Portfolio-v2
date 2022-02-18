import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { useStateValue } from "../../../contextapi/StateProvider"

import Logo from "../Logo/logo"
import * as classes from "./navbar.module.css"
import resumeLink from "../../../assets/documents/resume.pdf"

const Navbar = () => {
  useEffect(() => {
    var last_scroll_top = 0
    var scroll_top = 0
    var smartScrollbar = document.querySelector(".smart-scroll")

    document.addEventListener("scroll", function () {
      scroll_top = document.querySelector("html").scrollTop
      if (scroll_top < last_scroll_top) {
        smartScrollbar.classList.remove("scrolled-down")
        smartScrollbar.classList.add("scrolled-up")
      } else {
        smartScrollbar.classList.remove("scrolled-up")
        smartScrollbar.classList.add("scrolled-down")
      }
      last_scroll_top = scroll_top

      if (scroll_top === 0) {
        smartScrollbar.style =
          "box-shadow: none; background: transparent; margin-top: 0"
      } else {
        smartScrollbar.style =
          "box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);"
      }
    })
  }, [])

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [{ lightMode }, dispatch] = useStateValue()

  const toggleLightMode = () => {
    let mode = lightMode === true ? "dark" : "light"
    window.localStorage.setItem("theme", mode)
    dispatch({
      type: "TOGGLE_THEME",
    })
  }

  useEffect(() => {
    if (navbarOpen) {
      document
        .querySelector(".smart-scroll")
        .classList.add("scrolled-down-permanent")
    } else {
      document
        .querySelector(".smart-scroll")
        .classList.remove("scrolled-down-permanent")
    }
  }, [navbarOpen])

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }

  const navbarCloseHandler = () => {
    setNavbarOpen(false)
  }

  return (
    <div className={`${classes.navbar} ${lightMode && classes.light}`}>
      <Link to="/" className={classes.link}>
        <div className={`${classes.logo} ${lightMode && classes.light}`}>
          <Logo />
        </div>
      </Link>
      <div className={`${classes.links} ${navbarOpen && classes.open}`}>
        <div>
          <Link
            to="/#about"
            onClick={navbarCloseHandler}
            className={classes.link}
          >
            About
          </Link>
        </div>
        <div>
          <Link
            to="/#featuredProjects"
            onClick={navbarCloseHandler}
            className={classes.link}
          >
            Projects
          </Link>
        </div>
        <div>
          <Link
            to="/#contact"
            onClick={navbarCloseHandler}
            className={classes.link}
          >
            Contact
          </Link>
        </div>
        <div
          onClick={toggleLightMode}
          className={classes.link}
          role="button"
          tabIndex={0}
          style={{cursor: "pointer", "border": "none", "outline": "none"}}
        >
          {lightMode ? "Dark Mode" : "Light Mode"}
        </div>
        <div>
          <a
            href={resumeLink}
            target="_blank"
            rel="noreferrer"
            onClick={navbarCloseHandler}
            className={classes.resumeButton}
            role="button"
          >
            Resume
          </a>
        </div>
      </div>
      <div className={`${classes.hamburger} ${navbarOpen && classes.open}`}>
        <button title="Navbar Hamburger" onClick={navbarToggleHandler}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
    </div>
  )
}

export default Navbar
