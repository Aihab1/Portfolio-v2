import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo/logo'
import * as classes from './navbar.module.css'

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const navbarToggleHandler = () => {
        setNavbarOpen(!navbarOpen)
    }

    const navbarCloseHandler = () => {
        setNavbarOpen(false)
    }

    return (
        <div className={classes.navbar}>
            <Link to="/">
                <Logo />
            </Link>
            <div className={classes.links + ' ' + (navbarOpen && ' ' + classes.open)}>
                <div><Link to="/#about" onClick={navbarCloseHandler}>ABOUT</Link></div>
                <div><Link to="/#featuredProjects" onClick={navbarCloseHandler}>PROJECTS</Link></div>
                <div><Link to="/#contact" onClick={navbarCloseHandler}>CONTACT</Link></div>
                <div onClick={navbarCloseHandler}>RESUME</div>
            </div>
            <div className={classes.hamburger + ' ' + (navbarOpen && ' ' + classes.open)}>
                <button onClick={navbarToggleHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </div>
        </div>
    )
}

export default Navbar